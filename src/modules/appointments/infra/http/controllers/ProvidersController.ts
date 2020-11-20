import { Request, Response } from 'express';
import { container } from 'tsyringe';
import {  classToClass } from 'class-transformer';

import ListProvidersService from '@modules/appointments/services/LIstProviderService';

export default class ProviderController {
  public async index(request: Request ,response: Response ): Promise<Response>{

    const user_id = request.user.id;



    const listProvidereService =  container.resolve(ListProvidersService);

    const providers = await listProvidereService.execute({user_id});

    return response.json(classToClass(providers));
  }
}
