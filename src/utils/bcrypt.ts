import * as bycrpt from 'bcrypt';

export function encodePassword(password: string) {
  return bycrpt.hashSync(password, bycrpt.genSaltSync());
}

export function compare(passwordDto: string, passwordDB: string) {
  return bycrpt.compareSync(passwordDto, passwordDB);
}
