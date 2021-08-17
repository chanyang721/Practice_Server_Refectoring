import { Request, Response, NextFunction } from "express";
import Joi from "joi";
import db from "../../database";
import { Iinstructor, Ilecture, Istudent } from "../../interfaces"