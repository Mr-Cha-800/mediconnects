export default (src: string, fileName: string , mimeType: string ) =>
  fetch(src)
    .then(res =>  res.arrayBuffer())
    .then(buf => new File([buf], fileName, {type:mimeType}));
