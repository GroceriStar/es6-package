import groceristar from 'projects/groceristar';

describe('testing static data files are set', () => {

  test('ingredients file is set', () => {
    var result = groceristar.ingredients()
    expect(result).not.toBe('')
  })

  test('grocery file is set', () => {
    var result = groceristar.grocery()
    expect(result).not.toBe('')
  })

  // test('method getGroceryShowcase()', () => {
  //   var stream = groceristar.getGroceryShowcase()
  //   expect(stream).not.toBe('')
  // })
  //
  // test('method getGroceryByName("Clean Fatiring")', () => {
  //   var stream = groceristar.getGroceryByName("Clean Fatiring")
  //   expect(stream).not.toBe('')
  // })
  //
  // test('method getGroceryByNameWithDepAndIng("Clean Fatiring")', () => {
  //   var stream = groceristar.getGroceryByNameWithDepAndIng("Clean Fatiring")
  //   expect(stream).not.toBe('')
  // })


  test('users file is set', () => {
    var result = groceristar.users()
    expect(result).not.toBe('')
  })

  test('departments file is set', () => {
    var result = groceristar.departments()
    expect(result).not.toBe('')
  })

  // test('getAllDepartments()', () => {
  //   var stream = groceristar.getAllDepartments()
  //   expect(stream).not.toBe('')
  // })
  //
  // test('getAllIngredientsByOneDepartment("Fresh vegetables")', () => {
  //   var stream = groceristar.getAllIngredientsByOneDepartment('Fresh vegetables')
  //   expect(stream).not.toBe('')
  // })
  //
  // test('getGroceryById()', () => {
  //   for (let i = 1; i <= 7 ; i++) {
  //     var stream = groceristar.getGroceryById(i)
  //     expect(stream).not.toBe('')
  //   }
  // })
  //
  // test('getGroceryListsWithCountDepartments()', () => {
  //   var stream = groceristar.getGroceryListsWithCountDepartments()
  //   expect(stream).not.toBe('')
  // })

})
