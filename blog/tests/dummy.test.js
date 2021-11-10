const listHelpers = require('../utils/list_helpers')

const listWithOneBlog = [
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0
  }
]

const blogs = [
  {
    _id: "5a422a851b54a676234d17f7",
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 7,
    __v: 0
  },
  {
    _id: "5a422aa71b54a676234d17f8",
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5,
    __v: 0
  },
  {
    _id: "5a422b3a1b54a676234d17f9",
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12,
    __v: 0
  },
  {
    _id: "5a422b891b54a676234d17fa",
    title: "First class tests",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
    likes: 10,
    __v: 0
  },
  {
    _id: "5a422ba71b54a676234d17fb",
    title: "TDD harms architecture",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
    likes: 0,
    __v: 0
  },
  {
    _id: "5a422bc61b54a676234d17fc",
    title: "Type wars",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
    likes: 2,
    __v: 0
  }  
]

test('dummy returns one', ()=>{
    const blogs = []
    const result = listHelpers.dummy(blogs)
    expect(result).toBe(1)
})


describe('most blogs', ()=>{
    
      test('of empty list returns empty list',()=>{
          const result = listHelpers.mostBlogs([])
          expect(result).toEqual([])
      })
      test('of list with one element returns {theAuthorName, blogs:1}', ()=>{
        const result =listHelpers.mostBlogs(listWithOneBlog)
        expect(result).toEqual({author: 'Edsger W. Dijkstra',blogs: 1})
      })
      test('of bigger list is calculated right', ()=>{
        const result = listHelpers.mostBlogs(blogs)
        expect(result).toEqual({author:"Robert C. Martin", blogs:3})
      })
})

describe('total likes', ()=>{

    test('of empty lists is zero', ()=>{
        const result = listHelpers.totalLikes([])
        expect(result).toBe(0)
    })
    test('when list has only one blog, equals the likes of that', ()=>{
        const result = listHelpers.totalLikes(listWithOneBlog)
        expect(result).toBe(5)
    })
    test('of a bigger list is calculated right', ()=>{
        const result = listHelpers.totalLikes(blogs)
        expect(result).toBe(36)
    })

})

describe('favorite blog', ()=>{
    
    test('of empty lists returns an empty list', ()=>{
        const result= listHelpers.favoriteBlog([])
        expect(result).toEqual([])
    })
    test('when list has only one objet, returns this object', ()=>{
        const result = listHelpers.favoriteBlog(listWithOneBlog)
        expect(result).toEqual(listWithOneBlog[0])
    })
    test('of a bigger list is found the object with most likes', ()=>{
        const result = listHelpers.favoriteBlog(blogs)
        expect(result).toEqual({
            _id: "5a422b3a1b54a676234d17f9",
            title: "Canonical string reduction",
            author: "Edsger W. Dijkstra",
            url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
            likes: 12,
            __v: 0
          })
    })
})

describe('most likes', ()=>{
  test('of empty list returns empty list', ()=>{
    const result = listHelpers.mostLikes([])
    expect(result).toEqual([])
  })
  test('of list with one element returns {author, totalLikes}', ()=>{
    const result = listHelpers.mostLikes(listWithOneBlog)
    expect(result).toEqual({author: "Edsger W. Dijkstra", likes: 5})
  })
  test('of bigger lists is calculated right', ()=>{
    const result = listHelpers.mostLikes(blogs)
    expect(result).toEqual({author: "Edsger W. Dijkstra", likes : 17})
  })
})