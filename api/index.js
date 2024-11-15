import { sql } from "@vercel/postgres";

const qrdata = async (req, res) => {
  try {
    const { qrdata } = await sql`SELECT * FROM qrdata;`;

    res.status(200).send(qrdata);
  } catch (error) {
    res.status(500).send("Error getting documents: " + error.message);
  }
};

export default qrdata;
