import React, { useRef, useEffect, useState, useCallback } from 'react';
import { CameraIcon } from './icons';
import { useTranslation } from '../contexts/LanguageContext';

interface CameraCaptureProps {
  onCapture: (imageDataUrl: string) => void;
  onClose: () => void;
}

const CameraCapture: React.FC<CameraCaptureProps> = ({ onCapture, onClose }) => {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  
  const [errorKey, setErrorKey] = useState<string | null>(null);
  const [errorParams, setErrorParams] = useState<Record<string, string | number> | undefined>(undefined);
  const [isCameraInitializing, setIsCameraInitializing] = useState<boolean>(true);
  const [isStreamActive, setIsStreamActive] = useState<boolean>(false);

  const startCamera = useCallback(async () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    setIsStreamActive(false);
    setErrorKey(null);
    setErrorParams(undefined);

    try {
      let mediaStreamAttempt: MediaStream | null = null;
      try {
        mediaStreamAttempt = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
      } catch (userFacingError: any) {
        if (userFacingError.name === "NotFoundError" || userFacingError.name === "DevicesNotFoundError") {
          try {
            mediaStreamAttempt = await navigator.mediaDevices.getUserMedia({ video: true });
          } catch (fallbackError: any) {
            throw fallbackError;
          }
        } else {
          throw userFacingError;
        }
      }

      streamRef.current = mediaStreamAttempt;
      setIsStreamActive(true);

      if (videoRef.current && mediaStreamAttempt) {
        videoRef.current.srcObject = mediaStreamAttempt;
        videoRef.current.play().catch(playError => {
            console.warn("Video play() failed:", playError);
        });
      }
      setErrorKey(null);
    } catch (err: any) {
      console.error("Error accessing camera:", err.name, err.message);
      let key = "cameraErrorAccess";
      let params: Record<string, string | number> | undefined = undefined;

      if (err instanceof DOMException || (err.name && err.message)) {
        if (err.name === "NotFoundError" || err.name === "DevicesNotFoundError") {
          key = "cameraErrorNoCamera";
        } else if (err.name === "NotAllowedError" || err.name === "PermissionDeniedError") {
          key = "cameraErrorPermission";
        } else if (err.name === "NotReadableError" || err.name === "TrackStartError") {
          key = "cameraErrorInUse";
        } else if (err.name === "OverconstrainedError" || err.name === "ConstraintNotSatisfiedError") {
          key = "cameraErrorConstraint";
        } else {
          key = "cameraErrorGeneric";
          params = { message: err.message || err.name };
        }
      }
      setErrorKey(key);
      setErrorParams(params);
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
        streamRef.current = null;
      }
      setIsStreamActive(false);
    }
  }, []);

  useEffect(() => {
    setIsCameraInitializing(true);
    startCamera().finally(() => {
        setIsCameraInitializing(false);
    });

    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
        streamRef.current = null;
      }
      setIsStreamActive(false);
    };
  }, [startCamera]);

  const handleCapture = () => {
    if (videoRef.current && canvasRef.current && streamRef.current && streamRef.current.active) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext('2d');
      if (context) {
        if (streamRef.current.getVideoTracks().some(track => track.getSettings().facingMode === 'user')) {
            context.translate(canvas.width, 0);
            context.scale(-1, 1);
        }
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageDataUrl = canvas.toDataURL('image/jpeg');
        onCapture(imageDataUrl);
      }
    } else {
        console.warn("Capture failed: Video, canvas, or active stream not available.");
        setErrorKey("cameraErrorCapture");
    }
  };
  
  const containerClasses = "fixed inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center z-50 p-4";
  const videoContainerClasses = "relative w-full max-w-lg aspect-[3/4] bg-gray-900 rounded-lg overflow-hidden shadow-2xl mb-4";
  const videoClasses = "w-full h-full object-cover";
  const buttonClasses = "px-6 py-3 text-lg font-semibold rounded-lg transition-all duration-200 ease-in-out";
  const captureButtonClasses = `${buttonClasses} bg-primary text-primary-content hover:bg-opacity-90 focus:ring-4 focus:ring-primary focus:ring-opacity-50 flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed`;
  const closeButtonClasses = `${buttonClasses} bg-gray-600 text-white hover:bg-gray-500 focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50 mt-2`;

  if (errorKey && !isCameraInitializing) {
    return (
      <div className={containerClasses}>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl text-center">
          <p className="text-red-500 dark:text-red-400 text-lg mb-4">{t(errorKey, errorParams)}</p>
          <button onClick={onClose} className={closeButtonClasses.replace('mt-2', '')}>{t('cameraCloseButton')}</button>
        </div>
      </div>
    );
  }

  return (
    <div className={containerClasses}>
      <div className={videoContainerClasses}>
        <video ref={videoRef} autoPlay playsInline muted className={videoClasses} aria-label="Camera feed"></video>
        <canvas ref={canvasRef} style={{ display: 'none' }} aria-hidden="true"></canvas>
         {isCameraInitializing && (
            <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
                <div className="w-8 h-8 border-2 border-white border-t-transparent border-solid rounded-full animate-spin mr-2"></div>
                {t('cameraInitializing')}
            </div>
         )}
         {!isCameraInitializing && !isStreamActive && !errorKey && (
            <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 p-4 text-center">
                {t('cameraErrorAccess')}
            </div>
         )}
      </div>
      <button 
        onClick={handleCapture} 
        className={captureButtonClasses} 
        disabled={!isStreamActive || isCameraInitializing}
        aria-disabled={!isStreamActive || isCameraInitializing}
      >
        <CameraIcon className="w-6 h-6" />
        <span>{t('cameraScanFaceButton')}</span>
      </button>
      <button onClick={onClose} className={closeButtonClasses}>
        {t('cameraCancelButton')}
      </button>
    </div>
  );
};

export default CameraCapture;