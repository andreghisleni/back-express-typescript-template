import { container } from 'tsyringe';

import mailConfig from '@config/mail';

import { EtherealMailProvider } from './implementations/EtherealMailProvider';
import { SESMailProvider } from './implementations/SESMailProvider';
import { SMTPMailProvider } from './implementations/SMTPMailProvider';
import { IMailProvider } from './models/IMailProvider';

const providers = {
  ethereal: container.resolve(EtherealMailProvider),
  smtp: container.resolve(SMTPMailProvider),
  ses: container.resolve(SESMailProvider),
};

container.registerInstance<IMailProvider>(
  'MailProvider',
  providers[mailConfig.driver],
);
