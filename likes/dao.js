import model from "./model.js";

export const findAllLikes = () => model.find();
export const createUserLikesArt = (userId, artworkID) =>
  model.create({ user: userId, artworkID: artworkID });
export const deleteUserLikesArt = (userId, artworkID) =>
  model.deleteOne({ user: userId, artworkID: artworkID });
export const findUsersThatLikeArt = (artworkID) =>
  model.find({ artworkID: artworkID }).populate("user");
export const findArtsThatUserLikes = (userId) => model.find({ user: userId });
