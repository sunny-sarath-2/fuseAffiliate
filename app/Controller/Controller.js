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
