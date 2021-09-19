import { Request, Response } from "express";
import { Container } from "typedi";
import InstructorModel from "../service/instructorquery"
import MessageFormat from "../utils/requestFormat";
const { responseFormat } = Container.get(MessageFormat)



