import * as dao from "./dao.js";

function GallariesRoutes(app) {
  const findAllGallaries = async (req, res) => {
    const gallaries = await dao.findAllGallaries();
    res.json(gallaries);
  };

  const findOneGallary = async (req, res) => {
    const gallaryID = req.params.gallaryID;
    const gallary = await dao.findOneGallary(gallaryID);
    res.json(gallary);
  }
  const createUserAddToGallary = async (req, res) => {
    const userId = req.params.userId;
    const gallaryID = req.params.gallaryID;
    const artworkID = req.params.artworkID;
    const addToGallary = await dao.createUserAddToGallary(userId, gallaryID, artworkID);
    res.json(addToGallary);
  };
  const deleteUserAddToGallary = async (req, res) => {
    const userId = req.params.userId;
    const gallaryID = req.params.gallaryID;
    const artworkID = req.params.artworkID;
    const deleteFromGallary = await dao.deleteUserAddToGallary(userId, gallaryID, artworkID);
    res.json(deleteFromGallary);
  };

  const findGallariesThatUserCreates = async (req, res) => {
    const userId = req.params.userId;
    const gallaries = await dao.getUniqueGallaryIDs(userId);
    res.json(gallaries);
  };

  const findUserOneGallaryArtworks = async (req, res) => {
    const userId = req.params.userId;
    const gallaryID = req.params.gallaryID;
    const artworks = await dao.findUserOneGallaryArtworks(userId, gallaryID);
    res.json(artworks);
  };

  const deleteGallary = async (req, res) => {
    const gallaryID = req.params.gallaryID;
    const deleteGallary = await dao.deleteAllGallariesByGallaryID(gallaryID);
    res.json(deleteGallary);
  };
  
  app.get("/api/gallaries", findAllGallaries);
  app.get("/api/gallaries/:gallaryID", findOneGallary);

  app.delete("/api/gallaries/delete/:gallaryID", deleteGallary);
  app.post("/api/users/:userId/gallaries/:gallaryID/:artworkID", createUserAddToGallary);
  app.delete("/api/users/:userId/gallaries/:gallaryID/:artworkID", deleteUserAddToGallary);


  app.get("/api/users/:userId/gallaries/:gallaryID", findUserOneGallaryArtworks);
  app.get("/api/users/:userId/gallaries", findGallariesThatUserCreates);
}

export default GallariesRoutes;
