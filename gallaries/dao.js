import model from "./model.js";

export const findAllGallaries = () => model.find();
export const createUserAddToGallary = (userId, gallaryID, artworkID) =>
  model.create({ user: userId, gallaryID: gallaryID, artworkID: artworkID });
export const deleteUserAddToGallary = (userId, gallaryID) =>
  model.deleteOne({ user: userId, gallaryID: gallaryID, artworkID: artworkID });
export const findGallariesThatUserCreates = (userId) => model.find({ user: userId });

export const findUserOneGallaryArtworks = (userId, gallaryID) => model.find({ user: userId, gallaryID: gallaryID });


export const getUniqueGallaryIDs = (userId) => model.distinct("gallaryID", { user: userId });