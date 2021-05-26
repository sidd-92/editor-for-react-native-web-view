let editor;
ClassicEditor.create(document.querySelector("#editor"), {
  toolbar: ["heading", "|", "bold", "italic", "bulletedList", "numberedList"],
  heading: {
    options: [
      {
        model: "paragraph",
        title: "Paragraph",
        class: "ck-heading_paragraph",
      },
      {
        model: "heading1",
        view: "h1",
        title: "Heading 1",
        class: "ck-heading_heading1",
      },
      {
        model: "heading2",
        view: "h2",
        title: "Heading 2",
        class: "ck-heading_heading2",
      },
    ],
  },
})
  .then((nEditor) => {
    editor = nEditor;
  })
  .catch((error) => {
    console.error(error);
  });

function returnData() {
  var plainText = $(editor.getData()).text();
  console.log("Plain TEXT", plainText);
  console.log("REACT NATIVE WEB VIEW", window.ReactNativeWebView);
  if (window.ReactNativeWebView) {
    window.ReactNativeWebView.postMessage(plainText);
  }
  console.log("HTML", editor.getData());
}
