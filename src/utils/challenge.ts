import { Challenge, UserChallenge } from "@lets-science/letsscience-client";

export const isDone = (ch: Challenge, uch: UserChallenge): boolean => {
    return ch.goal < uch.progress;
}