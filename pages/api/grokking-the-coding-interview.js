import data from "../../data/grokking-the-coding-interview";

export default function handler(req, res) {
  res.status(200).json(data);
}
