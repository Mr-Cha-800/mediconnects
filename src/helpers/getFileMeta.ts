const reader = new FileReader();
export const getImageMeta = (file: File) => {
  return new Promise((resolve) => {
    reader.onload = ({ target: { result } }: any) => {
      const img = new Image();
      img.addEventListener("load", function() {
        resolve({width: this.naturalWidth, height: this.naturalHeight});
      });
      img.src = result;
    };
    reader.readAsDataURL(file);
  });
};

export const getVideoMeta = (file: File) => {
  return new Promise((resolve) => {
    reader.onload = ({ target: { result } }: any) => {
      const video = document.createElement('video');
      video.addEventListener("canplay", function() {
        resolve({width: this.videoWidth, height: this.videoHeight, duration: this.duration, resolution: 'hd'});
      });
      const source = document.createElement('source');
      source.setAttribute('type', 'video/mp4');
      source.setAttribute('src', result);
      video.append(source);
      console.log('video', video);
    };
    reader.readAsDataURL(file);
  });
};

export const getAudioMeta = (file: File) => {
  return new Promise((resolve) => {
    reader.onload = ({ target: { result } }: any) => {
      const video = document.createElement('video');
      video.addEventListener("canplay", function() {
        resolve({duration: this.duration, resolution: 'hd'});
      });
      const source = document.createElement('source');
      source.setAttribute('type', 'audio/mp3');
      source.setAttribute('src', result);
      video.append(source);
      console.log('video', video);
    };
    reader.readAsDataURL(file);
  });
};
