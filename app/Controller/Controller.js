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
    getDataContentTypes("/fusecruds/getmodel/", chapter, "56").then(result => {
      resolve(result);
    });
  });

ControllerfetchSeries = data =>
  new Promise((resolve, rejects) => {
    fetchSeries("/shoojus/fetchSeries", {
      series_id: "ASCA\\HigherLogic\\BlogEntries"
    }).then(result => {
      resolve(result);
    });
  });

ControllerContentTypeData = data =>
  new Promise((resolve, rejects) => {
    fetchSeries("/shoojus/fetchSeries", {
      series_id: data
    }).then(result => {
      resolve(result);
    });
  });

controllergetSeriesData = (chapter, model, series) =>
  new Promise((resolve, rejects) => {
    getSeriesData("/fusecruds/getmodel/", "NewYork", model, series).then(
      result => {
        resolve(result);
      }
    );
  });
