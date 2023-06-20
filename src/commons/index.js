const dotenv = require("dotenv");
const { v4: uuidv4 } = require("uuid");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const {
  PutObjectCommand,
  CreateBucketCommand,
  DeleteObjectCommand,
  GetObjectCommand,
  S3Client,
  DeleteObjectsCommand,
} = require("@aws-sdk/client-s3");
const { Sequelize, Model, DataTypes } = require("sequelize");
const express = require("express");
const sharp = require("sharp");
const crypto = require("crypto");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { debugs } = require("./debug");
const { hashedValue } = require("./encrypt");
const { dataConversion } = require("./dataConversion");
const { auth, requiresAuth } = require("express-openid-connect");
const { statusCodeAws, dataAwsOutput } = require("./statusCodeAws");
const { generateID } = require("./generateID");

const commons = {
  dotenv,
  express,
  uuidv4,
  getSignedUrl,
  PutObjectCommand,
  CreateBucketCommand,
  DeleteObjectCommand,
  GetObjectCommand,
  S3Client,
  DeleteObjectsCommand,
  Sequelize,
  Model,
  DataTypes,
  sharp,
  crypto,
  Joi,
  jwt,
  bcrypt,
  debugs,
  hashedValue,
  dataConversion,
  auth,
  requiresAuth,
  statusCodeAws,
  dataAwsOutput,
  generateID,
};

exports.dotenv = commons.dotenv;
exports.express = commons.express;
exports.uuidv4 = commons.uuidv4;
exports.getSignedUrl = commons.getSignedUrl;
exports.PutObjectCommand = commons.PutObjectCommand;
exports.CreateBucketCommand = commons.CreateBucketCommand;
exports.DeleteObjectCommand = commons.DeleteObjectCommand;
exports.GetObjectCommand = commons.GetObjectCommand;
exports.S3Client = commons.S3Client;
exports.DeleteObjectsCommand = commons.DeleteObjectsCommand;
exports.Sequelize = commons.Sequelize;
exports.Model = commons.Model;
exports.DataTypes = commons.DataTypes;
exports.sharp = commons.sharp;
exports.crypto = commons.crypto;
exports.Joi = commons.Joi;
exports.jwt = commons.jwt;
exports.bcrypt = commons.bcrypt;
exports.debugs = commons.debugs;
exports.hashedValue = commons.hashedValue;
exports.dataConversion = commons.dataConversion;
exports.auth = commons.auth;
exports.requiresAuth = commons.requiresAuth;
exports.statusCodeAws = commons.statusCodeAws;
exports.dataAwsOutput = commons.dataAwsOutput;
exports.generateID = commons.generateID;
