const Aviary = window.Aviary;

const featherEditor = new Aviary.Feather({
  apiKey: '_',
  apiVersion: 3,
  theme: 'dark',
  tools: 'all',
  appendTo: '',
  onSave: function(imageID, newURL) {
    var img = document.getElementById(imageID);
    img.src = newURL;
  },
  onError: function(errorObj) {
    alert(errorObj.message);
  }
});

const launchEditor = function launchEditor(id, src) {
  featherEditor.launch({
      image: id,
      url: src
  });
  return false;
}

export default launchEditor;
