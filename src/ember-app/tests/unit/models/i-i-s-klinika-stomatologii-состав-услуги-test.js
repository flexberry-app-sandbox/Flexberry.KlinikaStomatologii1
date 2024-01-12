import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-klinika-stomatologii-состав-услуги', 'Unit | Model | i-i-s-klinika-stomatologii-состав-услуги', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-klinika-stomatologii-документы',
    'model:i-i-s-klinika-stomatologii-должность',
    'model:i-i-s-klinika-stomatologii-запись',
    'model:i-i-s-klinika-stomatologii-кабинет',
    'model:i-i-s-klinika-stomatologii-клиент',
    'model:i-i-s-klinika-stomatologii-материал',
    'model:i-i-s-klinika-stomatologii-оказание-услуг',
    'model:i-i-s-klinika-stomatologii-оплата',
    'model:i-i-s-klinika-stomatologii-производитель',
    'model:i-i-s-klinika-stomatologii-регистр-записи',
    'model:i-i-s-klinika-stomatologii-состав-услуги',
    'model:i-i-s-klinika-stomatologii-сотрудник',
    'model:i-i-s-klinika-stomatologii-услуга',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
