ControllerGetSiteConfig = chapter =>
  new Promise((resolve, rejects) => {
    let data = {
      chapter: chapter
    };
    getSiteconfigbyChapter("/shoojus/getSiteconfigbyChapter", data).then(
      result => {
        resolve(result);
      }
    );
  });

ControllerGetBlogs = (chapter, model) =>
  new Promise((resolve, rejects) => {
    getDataContentTypes("/fusecruds/getmodel/", chapter, model).then(result => {
      resolve(result);
    });
  });
ControllerGetPages = (chapter, model) =>
  new Promise((resolve, rejects) => {
    getDataContentTypes("/fusecruds/getmodel/", chapter, model).then(result => {
      resolve(result);
    });
  });
