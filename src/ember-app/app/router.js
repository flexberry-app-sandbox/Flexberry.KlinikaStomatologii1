import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-klinika-stomatologii-должность-l');
  this.route('i-i-s-klinika-stomatologii-должность-e',
  { path: 'i-i-s-klinika-stomatologii-должность-e/:id' });
  this.route('i-i-s-klinika-stomatologii-должность-e.new',
  { path: 'i-i-s-klinika-stomatologii-должность-e/new' });
  this.route('i-i-s-klinika-stomatologii-запись-l');
  this.route('i-i-s-klinika-stomatologii-запись-e',
  { path: 'i-i-s-klinika-stomatologii-запись-e/:id' });
  this.route('i-i-s-klinika-stomatologii-запись-e.new',
  { path: 'i-i-s-klinika-stomatologii-запись-e/new' });
  this.route('i-i-s-klinika-stomatologii-кабинет-l');
  this.route('i-i-s-klinika-stomatologii-кабинет-e',
  { path: 'i-i-s-klinika-stomatologii-кабинет-e/:id' });
  this.route('i-i-s-klinika-stomatologii-кабинет-e.new',
  { path: 'i-i-s-klinika-stomatologii-кабинет-e/new' });
  this.route('i-i-s-klinika-stomatologii-клиент-l');
  this.route('i-i-s-klinika-stomatologii-клиент-e',
  { path: 'i-i-s-klinika-stomatologii-клиент-e/:id' });
  this.route('i-i-s-klinika-stomatologii-клиент-e.new',
  { path: 'i-i-s-klinika-stomatologii-клиент-e/new' });
  this.route('i-i-s-klinika-stomatologii-материал-l');
  this.route('i-i-s-klinika-stomatologii-материал-e',
  { path: 'i-i-s-klinika-stomatologii-материал-e/:id' });
  this.route('i-i-s-klinika-stomatologii-материал-e.new',
  { path: 'i-i-s-klinika-stomatologii-материал-e/new' });
  this.route('i-i-s-klinika-stomatologii-оплата-l');
  this.route('i-i-s-klinika-stomatologii-оплата-e',
  { path: 'i-i-s-klinika-stomatologii-оплата-e/:id' });
  this.route('i-i-s-klinika-stomatologii-оплата-e.new',
  { path: 'i-i-s-klinika-stomatologii-оплата-e/new' });
  this.route('i-i-s-klinika-stomatologii-производитель-l');
  this.route('i-i-s-klinika-stomatologii-производитель-e',
  { path: 'i-i-s-klinika-stomatologii-производитель-e/:id' });
  this.route('i-i-s-klinika-stomatologii-производитель-e.new',
  { path: 'i-i-s-klinika-stomatologii-производитель-e/new' });
  this.route('i-i-s-klinika-stomatologii-регистр-записи-l');
  this.route('i-i-s-klinika-stomatologii-регистр-записи-e',
  { path: 'i-i-s-klinika-stomatologii-регистр-записи-e/:id' });
  this.route('i-i-s-klinika-stomatologii-регистр-записи-e.new',
  { path: 'i-i-s-klinika-stomatologii-регистр-записи-e/new' });
  this.route('i-i-s-klinika-stomatologii-сотрудник-l');
  this.route('i-i-s-klinika-stomatologii-сотрудник-e',
  { path: 'i-i-s-klinika-stomatologii-сотрудник-e/:id' });
  this.route('i-i-s-klinika-stomatologii-сотрудник-e.new',
  { path: 'i-i-s-klinika-stomatologii-сотрудник-e/new' });
  this.route('i-i-s-klinika-stomatologii-услуга-l');
  this.route('i-i-s-klinika-stomatologii-услуга-e',
  { path: 'i-i-s-klinika-stomatologii-услуга-e/:id' });
  this.route('i-i-s-klinika-stomatologii-услуга-e.new',
  { path: 'i-i-s-klinika-stomatologii-услуга-e/new' });
});

export default Router;
