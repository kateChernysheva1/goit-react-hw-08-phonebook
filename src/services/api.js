const API_NEW = 'https://connections-api.herokuapp.com/';

const GET_Authenticate = token => {
  return {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
};

const POST_Authenticate = (token, data = null) => {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: data ? JSON.stringify(data) : data,
  };
};

const DELETE_Authenticate = token => ({
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

const POST = data => ({
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
});

export async function fetchContacts(token, thunkApi) {
  const response = await fetch(`${API_NEW}contacts`, GET_Authenticate(token));
  if (response.status === 400) {
    return thunkApi.rejectWithValue(await response.json());
  }
  return response.json();
}

export async function addContact(obj, thunkApi) {
  const token = obj.token;
  const data = { name: obj.name, number: obj.number };
  const response = await fetch(
    `${API_NEW}contacts`,
    POST_Authenticate(token, data)
  );
  if (response.status === 400) {
    return thunkApi.rejectWithValue(await response.json());
  }
  return response.json();
}

export async function deleteContact(obj, thunkApi) {
  const response = await fetch(
    `${API_NEW}contacts/${obj.id}`,
    DELETE_Authenticate(obj.token)
  );
  if (response.status === 400) {
    return thunkApi.rejectWithValue(await response.json());
  }
  return response.json();
}

export async function registration(obj, thunkApi) {
  const response = await fetch(`${API_NEW}users/signup`, POST(obj));
  if (response.status === 400) {
    return thunkApi.rejectWithValue(await response.json());
  }
  return await response.json();
}

export async function userCurrent(token, thunkApi) {
  const response = await fetch(
    `${API_NEW}users/current`,
    GET_Authenticate(token)
  );
  if (response.status === 400) {
    return thunkApi.rejectWithValue(await response.json());
  }
  return await response.json();
}

export async function login(obj, thunkApi) {
  const response = await fetch(`${API_NEW}users/login`, POST(obj));
  if (response.status === 400) {
    return thunkApi.rejectWithValue(await response.json());
  }
  return await response.json();
}

export async function logout(token, thunkApi) {
  const response = await fetch(
    `${API_NEW}users/logout`,
    POST_Authenticate(token)
  );
  if (response.status === 400) {
    return thunkApi.rejectWithValue(await response.json());
  }
  return await response.json();
}
