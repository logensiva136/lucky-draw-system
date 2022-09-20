import express from "express";

const home = (req, res, next) => {
  res.render("index");
};

export default home;
