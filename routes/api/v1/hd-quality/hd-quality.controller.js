import api from "#config/api";
import getMovieData from "#utils/getMovieData";

export const index = async (req, res) => {
  const numPage = req.query.page || 1;
  const hdQualityPage = await api(`/hd-quality/page/${numPage}`);
  const htmlCode = hdQualityPage.data;

  const { result, totalPages } = getMovieData({ htmlCode });

  res.json({
    data: result,
    totalItems: result.length,
    totalPages,
    currentPage: Number(numPage),
  });
};
