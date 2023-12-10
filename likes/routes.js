import * as dao from "./dao.js";

function LikesRoutes(app) {
  const findAllLikes = async (req, res) => {};
  const createUserLikesArt = async (req, res) => {
    const userId = req.params.userId;
    const artworkID = req.params.artworkID;
    const likes = await dao.createUserLikesArt(userId, artworkID);
    res.json(likes);
  };
  const deleteUserLikesArt = async (req, res) => {
    const userId = req.params.userId;
    const artworkID = req.params.artworkID;
    const likes = await dao.deleteUserLikesArt(userId, artworkID);
    res.json(likes);
  };
  const findUsersThatLikeArt = async (req, res) => {
    const artworkID = req.params.artworkID;

    const likes = await dao.findUsersThatLikeArt(artworkID);
    res.json(likes);
  };
  const findArtsThatUserLikes = async (req, res) => {
    const userId = req.params.userId;
    const likes = await dao.findArtsThatUserLikes(userId);
    res.json(likes);
  };
  app.get("/api/likes", findAllLikes);
  app.post("/api/users/:userId/likes/:artworkID", createUserLikesArt);
  app.delete("/api/users/:userId/likes/:artworkID", deleteUserLikesArt);
  app.get("/api/likes/:artworkID/users", findUsersThatLikeArt);
  app.get("/api/users/:userId/likes", findArtsThatUserLikes);
}

export default LikesRoutes;
