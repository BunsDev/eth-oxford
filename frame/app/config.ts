// use NODE_ENV to not have to change config based on where it's deployed
export const NEXT_PUBLIC_URL =
  process.env.NODE_ENV == 'development' ? 'http://localhost:3000' : 'https://eth-oxford.vercel.app';
export const STAKE_ADDRESS = '0xcD3D5E4E498BAb2e0832257569c3Fd4AE439dD6f';
export const POOL_CONTRACT_ADDR = '0x4403B0F5cad1fbDe2a51117E01A153e4e825d094';