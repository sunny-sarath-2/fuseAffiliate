getSiteconfigbyChapter = (api, data) => postServiceCall(api, data);
getChapters = api => getServiceCall(api);
getDataContentTypes = (api, chapter, model) =>
  getServiceCall(api + chapter + "/" + model);
