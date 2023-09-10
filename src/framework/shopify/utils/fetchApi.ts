type FetchParams = {
  query: string;
};

type FetchResult<T> = { data: T };

const fetchApi = async <T>({ query }: FetchParams): Promise<FetchResult<T>> => {
  const url = "http://localhost:4000/graphql";

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  });

  const { data, errors } = await res.json();

  if (errors) {
    // ?? is checking if left expression is null or undefined, if it is, go with the right expression
    // || checks if left expression is null, undefined, "", 0 or false
    throw new Error(errors[0].message ?? errors.message);
  }

  return { data };
};

export default fetchApi;
