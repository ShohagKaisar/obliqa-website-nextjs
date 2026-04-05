"use client";

interface VideoProps {
  videoSrc: string;
  className?: string;
}

const Video = ({ videoSrc, className }: VideoProps) => {
  return (
    <div className={className}>
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;