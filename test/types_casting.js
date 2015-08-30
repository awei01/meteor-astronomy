Tinytest.add('Types - Casting', function(test) {
  Astro.classes = [];

  var EmbedCast = Astro.Class({
    name: 'EmbedCast'
  });

  var Cast = Astro.Class({
    name: 'Cast',
    embedOne: {
      'object': {},
      'one': {
        class: 'EmbedCast'
      }
    },
    embedMany: {
      'array': {
        type: 'string'
      },
      'many': {
        class: 'EmbedCast'
      }
    },
    fields: {
      'string': 'string',
      'number': 'number',
      'boolean': 'boolean',
      'date': 'date',
    }
  });
  var cast = new Cast();

  cast.set('string', 123);
  test.equal(cast.string, '123',
    'The number should be casted to the string'
  );

  cast.set('number', '123');
  test.equal(cast.number, 123,
    'The string should be casted to the number'
  );

  cast.set('boolean', '');
  test.isFalse(cast.boolean,
    'The empty string should be casted to the false'
  );

  cast.set('boolean', '123');
  test.isTrue(cast.boolean,
    'The non empty string should be casted to the true'
  );

  cast.set('boolean', 0);
  test.isFalse(cast.boolean,
    'The 0 number should be casted to false'
  );

  cast.set('boolean', 1);
  test.isTrue(cast.boolean,
    'The 1 number should be casted to true'
  );

  cast.set('date', (new Date(2000, 0, 1, 0, 0, 0)).getTime());
  test.equal(cast.date, new Date(2000, 0, 1, 0, 0, 0),
    'The number should be casted to the date'
  );

  cast.set('object', 123);
  test.isNull(cast.object,
    'Setting a non object value should have no effect'
  );

  cast.set('object', {a: 'a'});
  test.equal(cast.object, {a: 'a'},
    'Setting an object value should succeed'
  );

  cast.set('array', 123);
  test.isNull(cast.array,
    'Setting a non array value should have no effect'
  );

  cast.set('array', [123]);
  test.equal(cast.array, ['123'],
    'The array of numbers should be casted to the array of strings'
  );

  cast.set('one', {});
  test.instanceOf(cast.one, EmbedCast,
    'The object should be casted to the instance of the class'
  );

  cast.set('many', [{}]);
  test.instanceOf(cast.many[0], EmbedCast,
    'The array of objects should be casted to the array of instances of the ' +
    'class'
  );
});
