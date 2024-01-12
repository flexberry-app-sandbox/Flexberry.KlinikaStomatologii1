import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-klinika-stomatologii-оплата', 'Unit | Serializer | i-i-s-klinika-stomatologii-оплата', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-klinika-stomatologii-оплата',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-klinika-stomatologii-единицы',
    'transform:i-i-s-klinika-stomatologii-тип-оплаты',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
