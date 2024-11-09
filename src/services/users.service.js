import prisma from "../database/PrismaClient.js";
import bcrypt from "bcryptjs";

export default class UsersService {
  async createUser(user) {
    const { nome, email, senha, tipo } = user;
    const senhaHash = bcrypt.hashSync(senha, 10);

    return await prisma.Usuario.create({
      data: {
        nome,
        email,
        senha: senhaHash,
        tipo,
      },
    });
  }

  async getUserByEmail(email) {
    return await prisma.Usuario.findUnique({
      where: { email },
    });
  }

  async getUserById(id) {
    return await prisma.usuario.findUnique({
      where: { id: Number(id) },
      select: {
        id: true,
        nome: true,
        email: true,
        tipo: true,
      },
    });
  }
}
