import postgres from "postgres";

const config = {
  host: "127.0.0.1",
  user: "postgres",
  password: "",
  port: 5432,
};

// BEGIN (write your solution here)
export default async (data = []) => {
  const sql = postgres(config);
  if (data.length > 0) {
      await sql`INSERT INTO articles ${sql(data)}`;
  }
  const result = await sql`SELECT id FROM articles`;
  const ids = result.map(row => row.id);
  sql.end();
  return ids;
}
// END
