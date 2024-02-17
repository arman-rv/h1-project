import http from "../interceptor";

export const getpaper = async (sort, query, catId) => {
  try {
    //console.log("Fetching started...");

    const queryParams = [];

    // if (page) queryParams.push(`Query=${page}`);
    // if (row) queryParams.push(`courseLevelId=${row}`);
    if (sort) queryParams.push(`SortingCol=${sort}`);
    // if (sortType) queryParams.push(`SortType=${sortType}`);
    if (query) queryParams.push(`query=${query}`);
    if (catId) queryParams.push(`NewsCategoryId=${catId}`);

    const url = `/News?${queryParams.join("&")}`;
    // console.log("yy", url);
    const result = await http.get(url);
    //result && console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getPaperCat = async () => {
  try {
    //console.log("Fetching started...");

    const result = await http.get(`/News/GetListNewsCategory`);
    
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getPaperCaById = async (id) => {
  try {
    //console.log("Fetching started...");

    const result = await http.get(`/News/${id}`);
    
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const getCommentById = async (id) => {
  try {
    //console.log("Fetching started...");

    const result = await http.get(`/News/GetNewsComments?NewsId=${id}`);
    
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const likedPaper = async (id) => {
  try {
    //console.log("Fetching started...");
    const result = await http.post(`/News/NewsLike/${id}`);
    //console.log(result);

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const deletlikedPaper = async (id) => {
  try {
    //console.log("Fetching started...");
    const result = await http.delete("/News/DeleteLikeNews",{data:id});
    // console.log("ss",result);

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};