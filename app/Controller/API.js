getSiteconfigbyChapter = (api, data) => postServiceCall(api, data);
getChapters = api => getServiceCall(api);
getDataContentTypes = (api, chapter, model) =>
  getServiceCall(api + chapter + "/" + model + "/" + "50" + "/" + "1");
fetchSeries = (api, data) => postServiceCall(api, data);
getSeriesData = (api, chapter, model, id) =>
  getServiceCall(api + chapter + "/" + model + "/" + id);
