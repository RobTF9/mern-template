const { exec } = require('child_process')

const name = process.argv[2] || 'mern'

const fs = require('fs/promises')

const now = new Date()
const date = now.toISOString()
// const yesterday = new Date(now - 1)

const resourceFields = {
  createdBy: {
    $oid: '63b947d668e5d809ddc89a00',
  },
  updatedBy: {
    $oid: '63b947d668e5d809ddc89a00',
  },
  createdAt: {
    $date: date,
  },
  updatedAt: {
    $date: date,
  },
}

const users = [
  {
    _id: {
      $oid: '63b947d668e5d809ddc89a00',
    },
    username: 'user',
    email: 'user@email.com',
    password: '$2a$08$nR5AlhhxkvKp55iIv0jKreGtjNOg/FHb3A2g6obDp5BFajvnpT9I2',
    createdAt: {
      $date: date,
    },
    updatedAt: {
      $date: date,
    },
  },
]

const projects = [
  {
    _id: {
      $oid: '63b947da68e5d809ddc89a06',
    },
    content:
      'Asking participants these questions... When did you become a parent? What are your favourite parts about being a parent? What are you most afraid of being a parent? What are your aspirations for your child?',
    title: 'Parenting study',
    ...resourceFields,
  },
]

const evidence = [
  {
    _id: {
      $oid: '63b94ea2e0bdce18c17f686f',
    },
    video:
      'https://res.cloudinary.com/dlhk8zpa5/video/upload/v1673088669/pmktmmc1vxqkvkbjikd6.mov',
    transcript:
      'https://res.cloudinary.com/dlhk8zpa5/raw/upload/v1673088670/pmktmmc1vxqkvkbjikd6.transcript',
    public_id: 'pmktmmc1vxqkvkbjikd6',
    source: {
      segement: '63c068ee891ce6c29c2eaba2',
      participant: 'Glen',
    },
    project: {
      $oid: '63b947da68e5d809ddc89a06',
    },
    transcriptObject: [
      {
        confidence: 0.8267951011657715,
        transcript:
          'Became apparent for the first time in mid. June 2019, June, 14 to my oldest son Alto.',
        words: [
          {
            word: 'Became',
            start_time: 1.2,
            end_time: 1.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f6878',
            },
          },
          {
            word: 'apparent',
            start_time: 1.5,
            end_time: 1.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f6879',
            },
          },
          {
            word: 'for',
            start_time: 1.9,
            end_time: 2,
            _id: {
              $oid: '63b94f39e0bdce18c17f687a',
            },
          },
          {
            word: 'the',
            start_time: 2,
            end_time: 2.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f687b',
            },
          },
          {
            word: 'first',
            start_time: 2.1,
            end_time: 2.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f687c',
            },
          },
          {
            word: 'time',
            start_time: 2.4,
            end_time: 3.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f687d',
            },
          },
          {
            word: 'in',
            start_time: 3.2,
            end_time: 4.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f687e',
            },
          },
          {
            word: 'mid.',
            start_time: 4.2,
            end_time: 4.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f687f',
            },
          },
          {
            word: 'June',
            start_time: 4.6,
            end_time: 5.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f6880',
            },
          },
          {
            word: '2019,',
            start_time: 5.6,
            end_time: 6.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f6881',
            },
          },
          {
            word: 'June,',
            start_time: 6.7,
            end_time: 6.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f6882',
            },
          },
          {
            word: '14',
            start_time: 6.9,
            end_time: 7.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f6883',
            },
          },
          {
            word: 'to',
            start_time: 7.7,
            end_time: 7.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f6884',
            },
          },
          {
            word: 'my',
            start_time: 7.8,
            end_time: 8,
            _id: {
              $oid: '63b94f39e0bdce18c17f6885',
            },
          },
          {
            word: 'oldest',
            start_time: 8.1,
            end_time: 8.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f6886',
            },
          },
          {
            word: 'son',
            start_time: 8.5,
            end_time: 8.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f6887',
            },
          },
          {
            word: 'Alto.',
            start_time: 8.7,
            end_time: 9.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f6888',
            },
          },
        ],
        _id: {
          $oid: '63b94f39e0bdce18c17f6877',
        },
      },
      {
        confidence: 0.8051121234893799,
        transcript:
          " And then again in the beginning of last year and I'm sorry, two years ago, 20 21 March 13th to our Second Son van.",
        words: [
          {
            word: 'And',
            start_time: 10.9,
            end_time: 11,
            _id: {
              $oid: '63b94f39e0bdce18c17f688a',
            },
          },
          {
            word: 'then',
            start_time: 11,
            end_time: 11.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f688b',
            },
          },
          {
            word: 'again',
            start_time: 11.2,
            end_time: 12,
            _id: {
              $oid: '63b94f39e0bdce18c17f688c',
            },
          },
          {
            word: 'in',
            start_time: 13,
            end_time: 13.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f688d',
            },
          },
          {
            word: 'the',
            start_time: 13.1,
            end_time: 13.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f688e',
            },
          },
          {
            word: 'beginning',
            start_time: 13.2,
            end_time: 13.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f688f',
            },
          },
          {
            word: 'of',
            start_time: 13.5,
            end_time: 13.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f6890',
            },
          },
          {
            word: 'last',
            start_time: 13.6,
            end_time: 14,
            _id: {
              $oid: '63b94f39e0bdce18c17f6891',
            },
          },
          {
            word: 'year',
            start_time: 14,
            end_time: 14.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f6892',
            },
          },
          {
            word: 'and',
            start_time: 15.5,
            end_time: 15.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f6893',
            },
          },
          {
            word: "I'm",
            start_time: 15.7,
            end_time: 15.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f6894',
            },
          },
          {
            word: 'sorry,',
            start_time: 15.8,
            end_time: 16.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f6895',
            },
          },
          {
            word: 'two',
            start_time: 16.1,
            end_time: 16.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f6896',
            },
          },
          {
            word: 'years',
            start_time: 16.2,
            end_time: 16.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f6897',
            },
          },
          {
            word: 'ago,',
            start_time: 16.4,
            end_time: 16.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f6898',
            },
          },
          {
            word: '20',
            start_time: 16.5,
            end_time: 16.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f6899',
            },
          },
          {
            word: '21',
            start_time: 16.8,
            end_time: 17.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f689a',
            },
          },
          {
            word: 'March',
            start_time: 17.8,
            end_time: 18.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f689b',
            },
          },
          {
            word: '13th',
            start_time: 18.4,
            end_time: 19.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f689c',
            },
          },
          {
            word: 'to',
            start_time: 19.2,
            end_time: 19.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f689d',
            },
          },
          {
            word: 'our',
            start_time: 19.3,
            end_time: 19.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f689e',
            },
          },
          {
            word: 'Second',
            start_time: 19.4,
            end_time: 19.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f689f',
            },
          },
          {
            word: 'Son',
            start_time: 19.8,
            end_time: 20.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f68a0',
            },
          },
          {
            word: 'van.',
            start_time: 20.1,
            end_time: 20.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f68a1',
            },
          },
        ],
        _id: {
          $oid: '63b94f39e0bdce18c17f6889',
        },
      },
      {
        confidence: 0.79838627576828,
        transcript:
          " What are your favorite Parts about being a parent? There's the I think there's the like natural quite common concept of feeling purpose and those are two things. But my favorite part of being a parent is the concept of",
        words: [
          {
            word: 'What',
            start_time: 22.8,
            end_time: 23,
            _id: {
              $oid: '63b94f39e0bdce18c17f68a3',
            },
          },
          {
            word: 'are',
            start_time: 23,
            end_time: 23,
            _id: {
              $oid: '63b94f39e0bdce18c17f68a4',
            },
          },
          {
            word: 'your',
            start_time: 23,
            end_time: 23.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f68a5',
            },
          },
          {
            word: 'favorite',
            start_time: 23.1,
            end_time: 23.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f68a6',
            },
          },
          {
            word: 'Parts',
            start_time: 23.5,
            end_time: 23.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f68a7',
            },
          },
          {
            word: 'about',
            start_time: 23.8,
            end_time: 24,
            _id: {
              $oid: '63b94f39e0bdce18c17f68a8',
            },
          },
          {
            word: 'being',
            start_time: 24,
            end_time: 24.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f68a9',
            },
          },
          {
            word: 'a',
            start_time: 24.2,
            end_time: 24.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f68aa',
            },
          },
          {
            word: 'parent?',
            start_time: 24.3,
            end_time: 24.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f68ab',
            },
          },
          {
            word: "There's",
            start_time: 28,
            end_time: 28.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f68ac',
            },
          },
          {
            word: 'the',
            start_time: 28.4,
            end_time: 29,
            _id: {
              $oid: '63b94f39e0bdce18c17f68ad',
            },
          },
          {
            word: 'I',
            start_time: 29,
            end_time: 29.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f68ae',
            },
          },
          {
            word: 'think',
            start_time: 29.1,
            end_time: 29.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f68af',
            },
          },
          {
            word: "there's",
            start_time: 29.2,
            end_time: 29.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f68b0',
            },
          },
          {
            word: 'the',
            start_time: 29.4,
            end_time: 29.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f68b1',
            },
          },
          {
            word: 'like',
            start_time: 29.5,
            end_time: 29.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f68b2',
            },
          },
          {
            word: 'natural',
            start_time: 29.8,
            end_time: 31,
            _id: {
              $oid: '63b94f39e0bdce18c17f68b3',
            },
          },
          {
            word: 'quite',
            start_time: 32,
            end_time: 32.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f68b4',
            },
          },
          {
            word: 'common',
            start_time: 32.2,
            end_time: 32.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f68b5',
            },
          },
          {
            word: 'concept',
            start_time: 32.5,
            end_time: 33.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f68b6',
            },
          },
          {
            word: 'of',
            start_time: 33.4,
            end_time: 34.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f68b7',
            },
          },
          {
            word: 'feeling',
            start_time: 35.6,
            end_time: 36,
            _id: {
              $oid: '63b94f39e0bdce18c17f68b8',
            },
          },
          {
            word: 'purpose',
            start_time: 36,
            end_time: 37,
            _id: {
              $oid: '63b94f39e0bdce18c17f68b9',
            },
          },
          {
            word: 'and',
            start_time: 37,
            end_time: 37.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f68ba',
            },
          },
          {
            word: 'those',
            start_time: 38.5,
            end_time: 38.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f68bb',
            },
          },
          {
            word: 'are',
            start_time: 38.7,
            end_time: 38.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f68bc',
            },
          },
          {
            word: 'two',
            start_time: 38.7,
            end_time: 38.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f68bd',
            },
          },
          {
            word: 'things.',
            start_time: 38.9,
            end_time: 39.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f68be',
            },
          },
          {
            word: 'But',
            start_time: 39.4,
            end_time: 39.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f68bf',
            },
          },
          {
            word: 'my',
            start_time: 39.9,
            end_time: 40.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f68c0',
            },
          },
          {
            word: 'favorite',
            start_time: 40.4,
            end_time: 40.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f68c1',
            },
          },
          {
            word: 'part',
            start_time: 40.8,
            end_time: 41,
            _id: {
              $oid: '63b94f39e0bdce18c17f68c2',
            },
          },
          {
            word: 'of',
            start_time: 41,
            end_time: 41,
            _id: {
              $oid: '63b94f39e0bdce18c17f68c3',
            },
          },
          {
            word: 'being',
            start_time: 41,
            end_time: 41.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f68c4',
            },
          },
          {
            word: 'a',
            start_time: 41.2,
            end_time: 41.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f68c5',
            },
          },
          {
            word: 'parent',
            start_time: 41.3,
            end_time: 41.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f68c6',
            },
          },
          {
            word: 'is',
            start_time: 41.7,
            end_time: 41.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f68c7',
            },
          },
          {
            word: 'the',
            start_time: 41.8,
            end_time: 41.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f68c8',
            },
          },
          {
            word: 'concept',
            start_time: 41.9,
            end_time: 42.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f68c9',
            },
          },
          {
            word: 'of',
            start_time: 42.7,
            end_time: 43.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f68ca',
            },
          },
        ],
        _id: {
          $oid: '63b94f39e0bdce18c17f68a2',
        },
      },
      {
        confidence: 0.9128385782241821,
        transcript: ' having a relationship with somebody.',
        words: [
          {
            word: 'having',
            start_time: 45.8,
            end_time: 46.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f68cc',
            },
          },
          {
            word: 'a',
            start_time: 46.2,
            end_time: 46.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f68cd',
            },
          },
          {
            word: 'relationship',
            start_time: 46.2,
            end_time: 47,
            _id: {
              $oid: '63b94f39e0bdce18c17f68ce',
            },
          },
          {
            word: 'with',
            start_time: 47,
            end_time: 47.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f68cf',
            },
          },
          {
            word: 'somebody.',
            start_time: 47.2,
            end_time: 48,
            _id: {
              $oid: '63b94f39e0bdce18c17f68d0',
            },
          },
        ],
        _id: {
          $oid: '63b94f39e0bdce18c17f68cb',
        },
      },
      {
        confidence: 0.8274856805801392,
        transcript:
          ' With two people now that I hope to have for the rest of my life.',
        words: [
          {
            word: 'With',
            start_time: 49.3,
            end_time: 49.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f68d2',
            },
          },
          {
            word: 'two',
            start_time: 49.5,
            end_time: 49.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f68d3',
            },
          },
          {
            word: 'people',
            start_time: 49.7,
            end_time: 50,
            _id: {
              $oid: '63b94f39e0bdce18c17f68d4',
            },
          },
          {
            word: 'now',
            start_time: 50,
            end_time: 50.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f68d5',
            },
          },
          {
            word: 'that',
            start_time: 52.3,
            end_time: 52.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f68d6',
            },
          },
          {
            word: 'I',
            start_time: 52.5,
            end_time: 52.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f68d7',
            },
          },
          {
            word: 'hope',
            start_time: 52.6,
            end_time: 52.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f68d8',
            },
          },
          {
            word: 'to',
            start_time: 52.8,
            end_time: 52.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f68d9',
            },
          },
          {
            word: 'have',
            start_time: 52.9,
            end_time: 53.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f68da',
            },
          },
          {
            word: 'for',
            start_time: 53.2,
            end_time: 53.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f68db',
            },
          },
          {
            word: 'the',
            start_time: 53.3,
            end_time: 53.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f68dc',
            },
          },
          {
            word: 'rest',
            start_time: 53.4,
            end_time: 53.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f68dd',
            },
          },
          {
            word: 'of',
            start_time: 53.6,
            end_time: 53.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f68de',
            },
          },
          {
            word: 'my',
            start_time: 53.7,
            end_time: 53.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f68df',
            },
          },
          {
            word: 'life.',
            start_time: 53.8,
            end_time: 54.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f68e0',
            },
          },
        ],
        _id: {
          $oid: '63b94f39e0bdce18c17f68d1',
        },
      },
      {
        confidence: 0.9128385782241821,
        transcript: ' and the idea of',
        words: [
          {
            word: 'and',
            start_time: 56.1,
            end_time: 56.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f68e2',
            },
          },
          {
            word: 'the',
            start_time: 57.1,
            end_time: 57.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f68e3',
            },
          },
          {
            word: 'idea',
            start_time: 57.3,
            end_time: 58.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f68e4',
            },
          },
          {
            word: 'of',
            start_time: 58.2,
            end_time: 59.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f68e5',
            },
          },
        ],
        _id: {
          $oid: '63b94f39e0bdce18c17f68e1',
        },
      },
      {
        confidence: 0.9128386974334717,
        transcript:
          ' Designing. The software of these two individuals by exposing them to certain things and protecting them from other things.',
        words: [
          {
            word: 'Designing.',
            start_time: 60.3,
            end_time: 61,
            _id: {
              $oid: '63b94f39e0bdce18c17f68e7',
            },
          },
          {
            word: 'The',
            start_time: 61,
            end_time: 61.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f68e8',
            },
          },
          {
            word: 'software',
            start_time: 61.2,
            end_time: 62.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f68e9',
            },
          },
          {
            word: 'of',
            start_time: 62.5,
            end_time: 62.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f68ea',
            },
          },
          {
            word: 'these',
            start_time: 62.7,
            end_time: 62.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f68eb',
            },
          },
          {
            word: 'two',
            start_time: 62.9,
            end_time: 63,
            _id: {
              $oid: '63b94f39e0bdce18c17f68ec',
            },
          },
          {
            word: 'individuals',
            start_time: 63,
            end_time: 63.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f68ed',
            },
          },
          {
            word: 'by',
            start_time: 63.8,
            end_time: 64,
            _id: {
              $oid: '63b94f39e0bdce18c17f68ee',
            },
          },
          {
            word: 'exposing',
            start_time: 64,
            end_time: 64.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f68ef',
            },
          },
          {
            word: 'them',
            start_time: 64.6,
            end_time: 64.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f68f0',
            },
          },
          {
            word: 'to',
            start_time: 64.8,
            end_time: 64.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f68f1',
            },
          },
          {
            word: 'certain',
            start_time: 64.9,
            end_time: 65.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f68f2',
            },
          },
          {
            word: 'things',
            start_time: 65.3,
            end_time: 65.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f68f3',
            },
          },
          {
            word: 'and',
            start_time: 65.6,
            end_time: 65.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f68f4',
            },
          },
          {
            word: 'protecting',
            start_time: 65.7,
            end_time: 66.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f68f5',
            },
          },
          {
            word: 'them',
            start_time: 66.2,
            end_time: 66.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f68f6',
            },
          },
          {
            word: 'from',
            start_time: 66.4,
            end_time: 66.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f68f7',
            },
          },
          {
            word: 'other',
            start_time: 66.6,
            end_time: 66.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f68f8',
            },
          },
          {
            word: 'things.',
            start_time: 66.9,
            end_time: 67.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f68f9',
            },
          },
        ],
        _id: {
          $oid: '63b94f39e0bdce18c17f68e6',
        },
      },
      {
        confidence: 0.8833450078964233,
        transcript: ' Feels like a wild responsibility.',
        words: [
          {
            word: 'Feels',
            start_time: 69.6,
            end_time: 70.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f68fb',
            },
          },
          {
            word: 'like',
            start_time: 70.2,
            end_time: 70.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f68fc',
            },
          },
          {
            word: 'a',
            start_time: 70.5,
            end_time: 70.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f68fd',
            },
          },
          {
            word: 'wild',
            start_time: 70.6,
            end_time: 71.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f68fe',
            },
          },
          {
            word: 'responsibility.',
            start_time: 71.2,
            end_time: 72.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f68ff',
            },
          },
        ],
        _id: {
          $oid: '63b94f39e0bdce18c17f68fa',
        },
      },
      {
        confidence: 0.9038156867027283,
        transcript: ' But one the I feel extremely lucky to have.',
        words: [
          {
            word: 'But',
            start_time: 73.7,
            end_time: 74.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f6901',
            },
          },
          {
            word: 'one',
            start_time: 74.1,
            end_time: 74.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f6902',
            },
          },
          {
            word: 'the',
            start_time: 74.5,
            end_time: 75.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f6903',
            },
          },
          {
            word: 'I',
            start_time: 75.6,
            end_time: 75.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f6904',
            },
          },
          {
            word: 'feel',
            start_time: 75.8,
            end_time: 76,
            _id: {
              $oid: '63b94f39e0bdce18c17f6905',
            },
          },
          {
            word: 'extremely',
            start_time: 76,
            end_time: 76.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f6906',
            },
          },
          {
            word: 'lucky',
            start_time: 76.6,
            end_time: 77,
            _id: {
              $oid: '63b94f39e0bdce18c17f6907',
            },
          },
          {
            word: 'to',
            start_time: 77,
            end_time: 77.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f6908',
            },
          },
          {
            word: 'have.',
            start_time: 77.3,
            end_time: 77.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f6909',
            },
          },
        ],
        _id: {
          $oid: '63b94f39e0bdce18c17f6900',
        },
      },
      {
        confidence: 0.9060652852058411,
        transcript:
          ' So we just had Christmas time and to see a three and a half year old be completely taken by the magic of Christmas, but the concept of Santa by these things that we all take for granted and we probably laugh at and think of silly in or like crusty older age.',
        words: [
          {
            word: 'So',
            start_time: 79.4,
            end_time: 79.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f690b',
            },
          },
          {
            word: 'we',
            start_time: 79.6,
            end_time: 79.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f690c',
            },
          },
          {
            word: 'just',
            start_time: 79.7,
            end_time: 80,
            _id: {
              $oid: '63b94f39e0bdce18c17f690d',
            },
          },
          {
            word: 'had',
            start_time: 80,
            end_time: 80.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f690e',
            },
          },
          {
            word: 'Christmas',
            start_time: 80.4,
            end_time: 80.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f690f',
            },
          },
          {
            word: 'time',
            start_time: 80.9,
            end_time: 81.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f6910',
            },
          },
          {
            word: 'and',
            start_time: 81.7,
            end_time: 82.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f6911',
            },
          },
          {
            word: 'to',
            start_time: 83.3,
            end_time: 83.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f6912',
            },
          },
          {
            word: 'see',
            start_time: 83.6,
            end_time: 83.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f6913',
            },
          },
          {
            word: 'a',
            start_time: 83.9,
            end_time: 83.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f6914',
            },
          },
          {
            word: 'three',
            start_time: 83.9,
            end_time: 84.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f6915',
            },
          },
          {
            word: 'and',
            start_time: 84.2,
            end_time: 84.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f6916',
            },
          },
          {
            word: 'a',
            start_time: 84.4,
            end_time: 84.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f6917',
            },
          },
          {
            word: 'half',
            start_time: 84.5,
            end_time: 84.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f6918',
            },
          },
          {
            word: 'year',
            start_time: 84.8,
            end_time: 85.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f6919',
            },
          },
          {
            word: 'old',
            start_time: 85.1,
            end_time: 85.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f691a',
            },
          },
          {
            word: 'be',
            start_time: 88.6,
            end_time: 89.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f691b',
            },
          },
          {
            word: 'completely',
            start_time: 89.1,
            end_time: 90.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f691c',
            },
          },
          {
            word: 'taken',
            start_time: 90.5,
            end_time: 91.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f691d',
            },
          },
          {
            word: 'by',
            start_time: 91.7,
            end_time: 91.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f691e',
            },
          },
          {
            word: 'the',
            start_time: 91.8,
            end_time: 92,
            _id: {
              $oid: '63b94f39e0bdce18c17f691f',
            },
          },
          {
            word: 'magic',
            start_time: 92,
            end_time: 92.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f6920',
            },
          },
          {
            word: 'of',
            start_time: 92.5,
            end_time: 92.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f6921',
            },
          },
          {
            word: 'Christmas,',
            start_time: 92.6,
            end_time: 93.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f6922',
            },
          },
          {
            word: 'but',
            start_time: 93.4,
            end_time: 93.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f6923',
            },
          },
          {
            word: 'the',
            start_time: 93.5,
            end_time: 93.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f6924',
            },
          },
          {
            word: 'concept',
            start_time: 93.6,
            end_time: 94.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f6925',
            },
          },
          {
            word: 'of',
            start_time: 94.1,
            end_time: 94.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f6926',
            },
          },
          {
            word: 'Santa',
            start_time: 94.2,
            end_time: 94.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f6927',
            },
          },
          {
            word: 'by',
            start_time: 94.8,
            end_time: 94.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f6928',
            },
          },
          {
            word: 'these',
            start_time: 94.9,
            end_time: 95.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f6929',
            },
          },
          {
            word: 'things',
            start_time: 95.1,
            end_time: 95.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f692a',
            },
          },
          {
            word: 'that',
            start_time: 95.4,
            end_time: 95.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f692b',
            },
          },
          {
            word: 'we',
            start_time: 95.5,
            end_time: 95.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f692c',
            },
          },
          {
            word: 'all',
            start_time: 95.6,
            end_time: 95.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f692d',
            },
          },
          {
            word: 'take',
            start_time: 95.7,
            end_time: 95.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f692e',
            },
          },
          {
            word: 'for',
            start_time: 95.9,
            end_time: 96,
            _id: {
              $oid: '63b94f39e0bdce18c17f692f',
            },
          },
          {
            word: 'granted',
            start_time: 96,
            end_time: 96.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f6930',
            },
          },
          {
            word: 'and',
            start_time: 96.4,
            end_time: 96.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f6931',
            },
          },
          {
            word: 'we',
            start_time: 96.5,
            end_time: 96.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f6932',
            },
          },
          {
            word: 'probably',
            start_time: 96.6,
            end_time: 97,
            _id: {
              $oid: '63b94f39e0bdce18c17f6933',
            },
          },
          {
            word: 'laugh',
            start_time: 97,
            end_time: 97.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f6934',
            },
          },
          {
            word: 'at',
            start_time: 97.4,
            end_time: 97.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f6935',
            },
          },
          {
            word: 'and',
            start_time: 97.6,
            end_time: 97.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f6936',
            },
          },
          {
            word: 'think',
            start_time: 97.7,
            end_time: 97.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f6937',
            },
          },
          {
            word: 'of',
            start_time: 97.9,
            end_time: 98,
            _id: {
              $oid: '63b94f39e0bdce18c17f6938',
            },
          },
          {
            word: 'silly',
            start_time: 98,
            end_time: 98.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f6939',
            },
          },
          {
            word: 'in',
            start_time: 99.2,
            end_time: 99.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f693a',
            },
          },
          {
            word: 'or',
            start_time: 99.4,
            end_time: 99.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f693b',
            },
          },
          {
            word: 'like',
            start_time: 99.7,
            end_time: 99.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f693c',
            },
          },
          {
            word: 'crusty',
            start_time: 99.9,
            end_time: 100.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f693d',
            },
          },
          {
            word: 'older',
            start_time: 100.5,
            end_time: 100.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f693e',
            },
          },
          {
            word: 'age.',
            start_time: 100.9,
            end_time: 101.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f693f',
            },
          },
        ],
        _id: {
          $oid: '63b94f39e0bdce18c17f690a',
        },
      },
      {
        confidence: 0,
        transcript: '',
        words: [],
        _id: {
          $oid: '63b94f39e0bdce18c17f6940',
        },
      },
      {
        confidence: 0.8867197632789612,
        transcript:
          " It's a genuine test of kind of the size of your heart. And it I feel like mine's expanded in the last couple of weeks just from experience and Christmas with my two sons. So that is a concept that I'm a relatively new parent. You know, there's some people, my parents have been parents for almost 40 years. No longer because I have older sisters, but even as a relatively new parent, there's something about being",
        words: [
          {
            word: "It's",
            start_time: 104.6,
            end_time: 104.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f6942',
            },
          },
          {
            word: 'a',
            start_time: 104.9,
            end_time: 105,
            _id: {
              $oid: '63b94f39e0bdce18c17f6943',
            },
          },
          {
            word: 'genuine',
            start_time: 105,
            end_time: 105.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f6944',
            },
          },
          {
            word: 'test',
            start_time: 105.6,
            end_time: 106.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f6945',
            },
          },
          {
            word: 'of',
            start_time: 106.2,
            end_time: 107,
            _id: {
              $oid: '63b94f39e0bdce18c17f6946',
            },
          },
          {
            word: 'kind',
            start_time: 107.3,
            end_time: 107.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f6947',
            },
          },
          {
            word: 'of',
            start_time: 107.5,
            end_time: 107.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f6948',
            },
          },
          {
            word: 'the',
            start_time: 107.5,
            end_time: 107.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f6949',
            },
          },
          {
            word: 'size',
            start_time: 107.6,
            end_time: 108.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f694a',
            },
          },
          {
            word: 'of',
            start_time: 108.1,
            end_time: 108.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f694b',
            },
          },
          {
            word: 'your',
            start_time: 108.2,
            end_time: 108.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f694c',
            },
          },
          {
            word: 'heart.',
            start_time: 108.4,
            end_time: 109.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f694d',
            },
          },
          {
            word: 'And',
            start_time: 109.2,
            end_time: 109.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f694e',
            },
          },
          {
            word: 'it',
            start_time: 109.6,
            end_time: 110.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f694f',
            },
          },
          {
            word: 'I',
            start_time: 110.9,
            end_time: 110.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f6950',
            },
          },
          {
            word: 'feel',
            start_time: 110.9,
            end_time: 111,
            _id: {
              $oid: '63b94f39e0bdce18c17f6951',
            },
          },
          {
            word: 'like',
            start_time: 111,
            end_time: 111.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f6952',
            },
          },
          {
            word: "mine's",
            start_time: 111.2,
            end_time: 111.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f6953',
            },
          },
          {
            word: 'expanded',
            start_time: 111.3,
            end_time: 111.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f6954',
            },
          },
          {
            word: 'in',
            start_time: 111.8,
            end_time: 111.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f6955',
            },
          },
          {
            word: 'the',
            start_time: 111.9,
            end_time: 112,
            _id: {
              $oid: '63b94f39e0bdce18c17f6956',
            },
          },
          {
            word: 'last',
            start_time: 112,
            end_time: 112.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f6957',
            },
          },
          {
            word: 'couple',
            start_time: 112.3,
            end_time: 112.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f6958',
            },
          },
          {
            word: 'of',
            start_time: 112.5,
            end_time: 112.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f6959',
            },
          },
          {
            word: 'weeks',
            start_time: 112.5,
            end_time: 112.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f695a',
            },
          },
          {
            word: 'just',
            start_time: 113.4,
            end_time: 113.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f695b',
            },
          },
          {
            word: 'from',
            start_time: 113.6,
            end_time: 113.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f695c',
            },
          },
          {
            word: 'experience',
            start_time: 113.7,
            end_time: 114.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f695d',
            },
          },
          {
            word: 'and',
            start_time: 114.2,
            end_time: 114.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f695e',
            },
          },
          {
            word: 'Christmas',
            start_time: 114.3,
            end_time: 114.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f695f',
            },
          },
          {
            word: 'with',
            start_time: 114.8,
            end_time: 115,
            _id: {
              $oid: '63b94f39e0bdce18c17f6960',
            },
          },
          {
            word: 'my',
            start_time: 115,
            end_time: 115.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f6961',
            },
          },
          {
            word: 'two',
            start_time: 115.1,
            end_time: 115.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f6962',
            },
          },
          {
            word: 'sons.',
            start_time: 115.3,
            end_time: 116,
            _id: {
              $oid: '63b94f39e0bdce18c17f6963',
            },
          },
          {
            word: 'So',
            start_time: 117.8,
            end_time: 118,
            _id: {
              $oid: '63b94f39e0bdce18c17f6964',
            },
          },
          {
            word: 'that',
            start_time: 118,
            end_time: 118.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f6965',
            },
          },
          {
            word: 'is',
            start_time: 118.3,
            end_time: 118.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f6966',
            },
          },
          {
            word: 'a',
            start_time: 118.4,
            end_time: 118.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f6967',
            },
          },
          {
            word: 'concept',
            start_time: 118.4,
            end_time: 119,
            _id: {
              $oid: '63b94f39e0bdce18c17f6968',
            },
          },
          {
            word: 'that',
            start_time: 119,
            end_time: 119.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f6969',
            },
          },
          {
            word: "I'm",
            start_time: 119.7,
            end_time: 119.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f696a',
            },
          },
          {
            word: 'a',
            start_time: 119.8,
            end_time: 119.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f696b',
            },
          },
          {
            word: 'relatively',
            start_time: 119.9,
            end_time: 120.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f696c',
            },
          },
          {
            word: 'new',
            start_time: 120.8,
            end_time: 121.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f696d',
            },
          },
          {
            word: 'parent.',
            start_time: 121.1,
            end_time: 121.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f696e',
            },
          },
          {
            word: 'You',
            start_time: 121.6,
            end_time: 121.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f696f',
            },
          },
          {
            word: 'know,',
            start_time: 121.6,
            end_time: 121.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f6970',
            },
          },
          {
            word: "there's",
            start_time: 121.7,
            end_time: 121.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f6971',
            },
          },
          {
            word: 'some',
            start_time: 121.9,
            end_time: 122,
            _id: {
              $oid: '63b94f39e0bdce18c17f6972',
            },
          },
          {
            word: 'people,',
            start_time: 122,
            end_time: 122.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f6973',
            },
          },
          {
            word: 'my',
            start_time: 122.5,
            end_time: 122.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f6974',
            },
          },
          {
            word: 'parents',
            start_time: 122.6,
            end_time: 123,
            _id: {
              $oid: '63b94f39e0bdce18c17f6975',
            },
          },
          {
            word: 'have',
            start_time: 123,
            end_time: 123.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f6976',
            },
          },
          {
            word: 'been',
            start_time: 123.1,
            end_time: 123.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f6977',
            },
          },
          {
            word: 'parents',
            start_time: 123.3,
            end_time: 123.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f6978',
            },
          },
          {
            word: 'for',
            start_time: 123.7,
            end_time: 124,
            _id: {
              $oid: '63b94f39e0bdce18c17f6979',
            },
          },
          {
            word: 'almost',
            start_time: 124,
            end_time: 124.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f697a',
            },
          },
          {
            word: '40',
            start_time: 124.3,
            end_time: 124.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f697b',
            },
          },
          {
            word: 'years.',
            start_time: 124.5,
            end_time: 125,
            _id: {
              $oid: '63b94f39e0bdce18c17f697c',
            },
          },
          {
            word: 'No',
            start_time: 125.7,
            end_time: 125.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f697d',
            },
          },
          {
            word: 'longer',
            start_time: 125.8,
            end_time: 126.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f697e',
            },
          },
          {
            word: 'because',
            start_time: 126.2,
            end_time: 126.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f697f',
            },
          },
          {
            word: 'I',
            start_time: 126.4,
            end_time: 126.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f6980',
            },
          },
          {
            word: 'have',
            start_time: 126.4,
            end_time: 126.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f6981',
            },
          },
          {
            word: 'older',
            start_time: 126.6,
            end_time: 126.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f6982',
            },
          },
          {
            word: 'sisters,',
            start_time: 126.8,
            end_time: 127.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f6983',
            },
          },
          {
            word: 'but',
            start_time: 127.3,
            end_time: 127.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f6984',
            },
          },
          {
            word: 'even',
            start_time: 129.8,
            end_time: 130.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f6985',
            },
          },
          {
            word: 'as',
            start_time: 130.1,
            end_time: 130.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f6986',
            },
          },
          {
            word: 'a',
            start_time: 130.2,
            end_time: 130.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f6987',
            },
          },
          {
            word: 'relatively',
            start_time: 130.2,
            end_time: 130.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f6988',
            },
          },
          {
            word: 'new',
            start_time: 130.6,
            end_time: 130.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f6989',
            },
          },
          {
            word: 'parent,',
            start_time: 130.8,
            end_time: 131.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f698a',
            },
          },
          {
            word: "there's",
            start_time: 131.4,
            end_time: 131.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f698b',
            },
          },
          {
            word: 'something',
            start_time: 131.6,
            end_time: 132,
            _id: {
              $oid: '63b94f39e0bdce18c17f698c',
            },
          },
          {
            word: 'about',
            start_time: 132,
            end_time: 132.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f698d',
            },
          },
          {
            word: 'being',
            start_time: 134.1,
            end_time: 134.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f698e',
            },
          },
        ],
        _id: {
          $oid: '63b94f39e0bdce18c17f6941',
        },
      },
      {
        confidence: 0.9128386378288269,
        transcript: ' Being the parent.',
        words: [
          {
            word: 'Being',
            start_time: 134.4,
            end_time: 134.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f6990',
            },
          },
          {
            word: 'the',
            start_time: 134.6,
            end_time: 134.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f6991',
            },
          },
          {
            word: 'parent.',
            start_time: 134.6,
            end_time: 135.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f6992',
            },
          },
        ],
        _id: {
          $oid: '63b94f39e0bdce18c17f698f',
        },
      },
      {
        confidence: 0.9128382802009583,
        transcript:
          " Of two boys who I love more than anything else in the world that is incredibly. I'm feeling is like making the cop even bigger, which is why all this cool. That's my favorite part about being a parent. One of my most afraid of being a parent.",
        words: [
          {
            word: 'Of',
            start_time: 136.6,
            end_time: 136.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f6994',
            },
          },
          {
            word: 'two',
            start_time: 136.8,
            end_time: 137,
            _id: {
              $oid: '63b94f39e0bdce18c17f6995',
            },
          },
          {
            word: 'boys',
            start_time: 137,
            end_time: 137.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f6996',
            },
          },
          {
            word: 'who',
            start_time: 137.4,
            end_time: 137.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f6997',
            },
          },
          {
            word: 'I',
            start_time: 137.5,
            end_time: 137.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f6998',
            },
          },
          {
            word: 'love',
            start_time: 137.5,
            end_time: 138.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f6999',
            },
          },
          {
            word: 'more',
            start_time: 138.2,
            end_time: 138.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f699a',
            },
          },
          {
            word: 'than',
            start_time: 138.3,
            end_time: 138.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f699b',
            },
          },
          {
            word: 'anything',
            start_time: 138.5,
            end_time: 138.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f699c',
            },
          },
          {
            word: 'else',
            start_time: 138.7,
            end_time: 139,
            _id: {
              $oid: '63b94f39e0bdce18c17f699d',
            },
          },
          {
            word: 'in',
            start_time: 139,
            end_time: 139,
            _id: {
              $oid: '63b94f39e0bdce18c17f699e',
            },
          },
          {
            word: 'the',
            start_time: 139,
            end_time: 139.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f699f',
            },
          },
          {
            word: 'world',
            start_time: 139.1,
            end_time: 139.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f69a0',
            },
          },
          {
            word: 'that',
            start_time: 140.3,
            end_time: 141,
            _id: {
              $oid: '63b94f39e0bdce18c17f69a1',
            },
          },
          {
            word: 'is',
            start_time: 141.7,
            end_time: 141.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f69a2',
            },
          },
          {
            word: 'incredibly.',
            start_time: 141.9,
            end_time: 142.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f69a3',
            },
          },
          {
            word: "I'm",
            start_time: 143.9,
            end_time: 144.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f69a4',
            },
          },
          {
            word: 'feeling',
            start_time: 144.3,
            end_time: 144.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f69a5',
            },
          },
          {
            word: 'is',
            start_time: 144.9,
            end_time: 145.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f69a6',
            },
          },
          {
            word: 'like',
            start_time: 145.1,
            end_time: 145.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f69a7',
            },
          },
          {
            word: 'making',
            start_time: 145.3,
            end_time: 145.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f69a8',
            },
          },
          {
            word: 'the',
            start_time: 145.9,
            end_time: 146.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f69a9',
            },
          },
          {
            word: 'cop',
            start_time: 146.3,
            end_time: 146.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f69aa',
            },
          },
          {
            word: 'even',
            start_time: 146.6,
            end_time: 146.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f69ab',
            },
          },
          {
            word: 'bigger,',
            start_time: 146.9,
            end_time: 147.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f69ac',
            },
          },
          {
            word: 'which',
            start_time: 148.8,
            end_time: 149,
            _id: {
              $oid: '63b94f39e0bdce18c17f69ad',
            },
          },
          {
            word: 'is',
            start_time: 149,
            end_time: 149.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f69ae',
            },
          },
          {
            word: 'why',
            start_time: 149.1,
            end_time: 149.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f69af',
            },
          },
          {
            word: 'all',
            start_time: 149.3,
            end_time: 149.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f69b0',
            },
          },
          {
            word: 'this',
            start_time: 149.5,
            end_time: 149.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f69b1',
            },
          },
          {
            word: 'cool.',
            start_time: 149.6,
            end_time: 150,
            _id: {
              $oid: '63b94f39e0bdce18c17f69b2',
            },
          },
          {
            word: "That's",
            start_time: 150.8,
            end_time: 151,
            _id: {
              $oid: '63b94f39e0bdce18c17f69b3',
            },
          },
          {
            word: 'my',
            start_time: 151,
            end_time: 151.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f69b4',
            },
          },
          {
            word: 'favorite',
            start_time: 151.2,
            end_time: 151.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f69b5',
            },
          },
          {
            word: 'part',
            start_time: 151.5,
            end_time: 151.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f69b6',
            },
          },
          {
            word: 'about',
            start_time: 151.9,
            end_time: 152.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f69b7',
            },
          },
          {
            word: 'being',
            start_time: 152.3,
            end_time: 152.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f69b8',
            },
          },
          {
            word: 'a',
            start_time: 152.5,
            end_time: 152.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f69b9',
            },
          },
          {
            word: 'parent.',
            start_time: 152.6,
            end_time: 153.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f69ba',
            },
          },
          {
            word: 'One',
            start_time: 155,
            end_time: 155.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f69bb',
            },
          },
          {
            word: 'of',
            start_time: 155.1,
            end_time: 155.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f69bc',
            },
          },
          {
            word: 'my',
            start_time: 155.2,
            end_time: 155.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f69bd',
            },
          },
          {
            word: 'most',
            start_time: 155.3,
            end_time: 155.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f69be',
            },
          },
          {
            word: 'afraid',
            start_time: 155.5,
            end_time: 156.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f69bf',
            },
          },
          {
            word: 'of',
            start_time: 156.6,
            end_time: 157.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f69c0',
            },
          },
          {
            word: 'being',
            start_time: 157.1,
            end_time: 157.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f69c1',
            },
          },
          {
            word: 'a',
            start_time: 157.3,
            end_time: 157.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f69c2',
            },
          },
          {
            word: 'parent.',
            start_time: 157.4,
            end_time: 158.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f69c3',
            },
          },
        ],
        _id: {
          $oid: '63b94f39e0bdce18c17f6993',
        },
      },
      {
        confidence: 0.7746540904045105,
        transcript: ' Is probably that my children will be unhappy.',
        words: [
          {
            word: 'Is',
            start_time: 161,
            end_time: 161.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f69c5',
            },
          },
          {
            word: 'probably',
            start_time: 161.3,
            end_time: 161.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f69c6',
            },
          },
          {
            word: 'that',
            start_time: 161.8,
            end_time: 162.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f69c7',
            },
          },
          {
            word: 'my',
            start_time: 162.1,
            end_time: 162.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f69c8',
            },
          },
          {
            word: 'children',
            start_time: 162.2,
            end_time: 162.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f69c9',
            },
          },
          {
            word: 'will',
            start_time: 162.6,
            end_time: 162.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f69ca',
            },
          },
          {
            word: 'be',
            start_time: 162.7,
            end_time: 162.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f69cb',
            },
          },
          {
            word: 'unhappy.',
            start_time: 162.9,
            end_time: 163.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f69cc',
            },
          },
        ],
        _id: {
          $oid: '63b94f39e0bdce18c17f69c4',
        },
      },
      {
        confidence: 0.8210655450820923,
        transcript:
          " But they'll grow up and this kind of crazy world that we have around us will continue to get crazier and crazier.",
        words: [
          {
            word: 'But',
            start_time: 164.8,
            end_time: 165,
            _id: {
              $oid: '63b94f39e0bdce18c17f69ce',
            },
          },
          {
            word: "they'll",
            start_time: 165,
            end_time: 165.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f69cf',
            },
          },
          {
            word: 'grow',
            start_time: 165.1,
            end_time: 165.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f69d0',
            },
          },
          {
            word: 'up',
            start_time: 165.4,
            end_time: 165.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f69d1',
            },
          },
          {
            word: 'and',
            start_time: 166.6,
            end_time: 167.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f69d2',
            },
          },
          {
            word: 'this',
            start_time: 168,
            end_time: 168.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f69d3',
            },
          },
          {
            word: 'kind',
            start_time: 169.7,
            end_time: 170,
            _id: {
              $oid: '63b94f39e0bdce18c17f69d4',
            },
          },
          {
            word: 'of',
            start_time: 170,
            end_time: 170.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f69d5',
            },
          },
          {
            word: 'crazy',
            start_time: 170.1,
            end_time: 170.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f69d6',
            },
          },
          {
            word: 'world',
            start_time: 170.8,
            end_time: 171.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f69d7',
            },
          },
          {
            word: 'that',
            start_time: 172,
            end_time: 172.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f69d8',
            },
          },
          {
            word: 'we',
            start_time: 172.1,
            end_time: 172.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f69d9',
            },
          },
          {
            word: 'have',
            start_time: 172.3,
            end_time: 172.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f69da',
            },
          },
          {
            word: 'around',
            start_time: 172.5,
            end_time: 173.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f69db',
            },
          },
          {
            word: 'us',
            start_time: 173.1,
            end_time: 173.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f69dc',
            },
          },
          {
            word: 'will',
            start_time: 174.3,
            end_time: 174.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f69dd',
            },
          },
          {
            word: 'continue',
            start_time: 174.4,
            end_time: 174.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f69de',
            },
          },
          {
            word: 'to',
            start_time: 174.8,
            end_time: 174.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f69df',
            },
          },
          {
            word: 'get',
            start_time: 174.9,
            end_time: 175.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f69e0',
            },
          },
          {
            word: 'crazier',
            start_time: 175.1,
            end_time: 175.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f69e1',
            },
          },
          {
            word: 'and',
            start_time: 175.6,
            end_time: 175.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f69e2',
            },
          },
          {
            word: 'crazier.',
            start_time: 175.7,
            end_time: 176.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f69e3',
            },
          },
        ],
        _id: {
          $oid: '63b94f39e0bdce18c17f69cd',
        },
      },
      {
        confidence: 0.9128385782241821,
        transcript: ' and,',
        words: [
          {
            word: 'and,',
            start_time: 177.7,
            end_time: 179,
            _id: {
              $oid: '63b94f39e0bdce18c17f69e5',
            },
          },
        ],
        _id: {
          $oid: '63b94f39e0bdce18c17f69e4',
        },
      },
      {
        confidence: 0.8597733378410339,
        transcript:
          " It means that there's very limited opportunity for them to find who they are and to be who they are and to live the type of life that they want to live, but is probably a stupid fear and that the live whatever life they want to live. Whether I agree with it or not.",
        words: [
          {
            word: 'It',
            start_time: 181.8,
            end_time: 182,
            _id: {
              $oid: '63b94f39e0bdce18c17f69e7',
            },
          },
          {
            word: 'means',
            start_time: 182,
            end_time: 182.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f69e8',
            },
          },
          {
            word: 'that',
            start_time: 182.3,
            end_time: 182.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f69e9',
            },
          },
          {
            word: "there's",
            start_time: 182.4,
            end_time: 182.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f69ea',
            },
          },
          {
            word: 'very',
            start_time: 182.7,
            end_time: 182.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f69eb',
            },
          },
          {
            word: 'limited',
            start_time: 182.9,
            end_time: 183.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f69ec',
            },
          },
          {
            word: 'opportunity',
            start_time: 183.3,
            end_time: 183.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f69ed',
            },
          },
          {
            word: 'for',
            start_time: 183.9,
            end_time: 184,
            _id: {
              $oid: '63b94f39e0bdce18c17f69ee',
            },
          },
          {
            word: 'them',
            start_time: 184,
            end_time: 184.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f69ef',
            },
          },
          {
            word: 'to',
            start_time: 184.6,
            end_time: 185.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f69f0',
            },
          },
          {
            word: 'find',
            start_time: 185.7,
            end_time: 186.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f69f1',
            },
          },
          {
            word: 'who',
            start_time: 186.1,
            end_time: 186.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f69f2',
            },
          },
          {
            word: 'they',
            start_time: 186.3,
            end_time: 186.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f69f3',
            },
          },
          {
            word: 'are',
            start_time: 186.5,
            end_time: 187,
            _id: {
              $oid: '63b94f39e0bdce18c17f69f4',
            },
          },
          {
            word: 'and',
            start_time: 187.1,
            end_time: 187.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f69f5',
            },
          },
          {
            word: 'to',
            start_time: 187.4,
            end_time: 187.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f69f6',
            },
          },
          {
            word: 'be',
            start_time: 187.5,
            end_time: 187.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f69f7',
            },
          },
          {
            word: 'who',
            start_time: 187.7,
            end_time: 187.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f69f8',
            },
          },
          {
            word: 'they',
            start_time: 187.9,
            end_time: 188.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f69f9',
            },
          },
          {
            word: 'are',
            start_time: 188.1,
            end_time: 188.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f69fa',
            },
          },
          {
            word: 'and',
            start_time: 188.6,
            end_time: 189,
            _id: {
              $oid: '63b94f39e0bdce18c17f69fb',
            },
          },
          {
            word: 'to',
            start_time: 189,
            end_time: 189.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f69fc',
            },
          },
          {
            word: 'live',
            start_time: 190.1,
            end_time: 190.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f69fd',
            },
          },
          {
            word: 'the',
            start_time: 190.3,
            end_time: 190.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f69fe',
            },
          },
          {
            word: 'type',
            start_time: 190.4,
            end_time: 190.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f69ff',
            },
          },
          {
            word: 'of',
            start_time: 190.5,
            end_time: 190.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a00',
            },
          },
          {
            word: 'life',
            start_time: 190.7,
            end_time: 190.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a01',
            },
          },
          {
            word: 'that',
            start_time: 190.9,
            end_time: 191.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a02',
            },
          },
          {
            word: 'they',
            start_time: 191.5,
            end_time: 191.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a03',
            },
          },
          {
            word: 'want',
            start_time: 191.7,
            end_time: 192.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a04',
            },
          },
          {
            word: 'to',
            start_time: 192.1,
            end_time: 192.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a05',
            },
          },
          {
            word: 'live,',
            start_time: 192.2,
            end_time: 192.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a06',
            },
          },
          {
            word: 'but',
            start_time: 192.8,
            end_time: 193.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a07',
            },
          },
          {
            word: 'is',
            start_time: 194.8,
            end_time: 195,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a08',
            },
          },
          {
            word: 'probably',
            start_time: 195,
            end_time: 195.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a09',
            },
          },
          {
            word: 'a',
            start_time: 195.4,
            end_time: 195.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a0a',
            },
          },
          {
            word: 'stupid',
            start_time: 195.4,
            end_time: 195.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a0b',
            },
          },
          {
            word: 'fear',
            start_time: 195.8,
            end_time: 196.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a0c',
            },
          },
          {
            word: 'and',
            start_time: 196.1,
            end_time: 196.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a0d',
            },
          },
          {
            word: 'that',
            start_time: 196.2,
            end_time: 196.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a0e',
            },
          },
          {
            word: 'the',
            start_time: 196.3,
            end_time: 196.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a0f',
            },
          },
          {
            word: 'live',
            start_time: 196.4,
            end_time: 196.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a10',
            },
          },
          {
            word: 'whatever',
            start_time: 196.5,
            end_time: 196.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a11',
            },
          },
          {
            word: 'life',
            start_time: 196.8,
            end_time: 197,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a12',
            },
          },
          {
            word: 'they',
            start_time: 197,
            end_time: 197.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a13',
            },
          },
          {
            word: 'want',
            start_time: 197.1,
            end_time: 197.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a14',
            },
          },
          {
            word: 'to',
            start_time: 197.3,
            end_time: 197.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a15',
            },
          },
          {
            word: 'live.',
            start_time: 197.4,
            end_time: 197.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a16',
            },
          },
          {
            word: 'Whether',
            start_time: 197.9,
            end_time: 198.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a17',
            },
          },
          {
            word: 'I',
            start_time: 198.3,
            end_time: 198.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a18',
            },
          },
          {
            word: 'agree',
            start_time: 198.4,
            end_time: 198.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a19',
            },
          },
          {
            word: 'with',
            start_time: 198.8,
            end_time: 199,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a1a',
            },
          },
          {
            word: 'it',
            start_time: 199,
            end_time: 199.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a1b',
            },
          },
          {
            word: 'or',
            start_time: 199.1,
            end_time: 199.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a1c',
            },
          },
          {
            word: 'not.',
            start_time: 199.1,
            end_time: 199.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a1d',
            },
          },
        ],
        _id: {
          $oid: '63b94f39e0bdce18c17f69e6',
        },
      },
      {
        confidence: 0.8182223439216614,
        transcript:
          " I just want them to have opportunity at my my greatest fear is that they won't have opportunity.",
        words: [
          {
            word: 'I',
            start_time: 203.1,
            end_time: 203.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a1f',
            },
          },
          {
            word: 'just',
            start_time: 203.2,
            end_time: 203.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a20',
            },
          },
          {
            word: 'want',
            start_time: 203.4,
            end_time: 203.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a21',
            },
          },
          {
            word: 'them',
            start_time: 203.6,
            end_time: 204,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a22',
            },
          },
          {
            word: 'to',
            start_time: 204,
            end_time: 204.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a23',
            },
          },
          {
            word: 'have',
            start_time: 204.8,
            end_time: 205.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a24',
            },
          },
          {
            word: 'opportunity',
            start_time: 205.1,
            end_time: 205.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a25',
            },
          },
          {
            word: 'at',
            start_time: 205.9,
            end_time: 206,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a26',
            },
          },
          {
            word: 'my',
            start_time: 206,
            end_time: 206.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a27',
            },
          },
          {
            word: 'my',
            start_time: 206.7,
            end_time: 206.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a28',
            },
          },
          {
            word: 'greatest',
            start_time: 206.8,
            end_time: 207.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a29',
            },
          },
          {
            word: 'fear',
            start_time: 207.2,
            end_time: 207.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a2a',
            },
          },
          {
            word: 'is',
            start_time: 207.4,
            end_time: 207.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a2b',
            },
          },
          {
            word: 'that',
            start_time: 207.6,
            end_time: 207.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a2c',
            },
          },
          {
            word: 'they',
            start_time: 207.7,
            end_time: 207.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a2d',
            },
          },
          {
            word: "won't",
            start_time: 207.9,
            end_time: 208.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a2e',
            },
          },
          {
            word: 'have',
            start_time: 208.1,
            end_time: 208.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a2f',
            },
          },
          {
            word: 'opportunity.',
            start_time: 208.3,
            end_time: 209.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a30',
            },
          },
        ],
        _id: {
          $oid: '63b94f39e0bdce18c17f6a1e',
        },
      },
      {
        confidence: 0,
        transcript: '',
        words: [],
        _id: {
          $oid: '63b94f39e0bdce18c17f6a31',
        },
      },
      {
        confidence: 0.8510109782218933,
        transcript:
          ' So, you know, you do other things that we feel are, right? Sending them to the best schools and exposing them to the most, like, helpful subjects that potentially trigger curiosity. And through that Journey, they find passions that create a spark within them, that make them want to increase motivation, for them, to want to further discover themselves and further, learn about those passions and for the purse.',
        words: [
          {
            word: 'So,',
            start_time: 212.4,
            end_time: 212.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a33',
            },
          },
          {
            word: 'you',
            start_time: 212.6,
            end_time: 212.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a34',
            },
          },
          {
            word: 'know,',
            start_time: 212.7,
            end_time: 213.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a35',
            },
          },
          {
            word: 'you',
            start_time: 213.1,
            end_time: 213.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a36',
            },
          },
          {
            word: 'do',
            start_time: 213.2,
            end_time: 213.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a37',
            },
          },
          {
            word: 'other',
            start_time: 213.3,
            end_time: 213.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a38',
            },
          },
          {
            word: 'things',
            start_time: 214.1,
            end_time: 214.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a39',
            },
          },
          {
            word: 'that',
            start_time: 214.6,
            end_time: 214.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a3a',
            },
          },
          {
            word: 'we',
            start_time: 214.7,
            end_time: 214.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a3b',
            },
          },
          {
            word: 'feel',
            start_time: 214.8,
            end_time: 215.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a3c',
            },
          },
          {
            word: 'are,',
            start_time: 215.1,
            end_time: 215.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a3d',
            },
          },
          {
            word: 'right?',
            start_time: 215.3,
            end_time: 215.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a3e',
            },
          },
          {
            word: 'Sending',
            start_time: 216,
            end_time: 216.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a3f',
            },
          },
          {
            word: 'them',
            start_time: 216.2,
            end_time: 216.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a40',
            },
          },
          {
            word: 'to',
            start_time: 216.3,
            end_time: 216.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a41',
            },
          },
          {
            word: 'the',
            start_time: 216.4,
            end_time: 216.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a42',
            },
          },
          {
            word: 'best',
            start_time: 216.4,
            end_time: 216.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a43',
            },
          },
          {
            word: 'schools',
            start_time: 216.7,
            end_time: 217.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a44',
            },
          },
          {
            word: 'and',
            start_time: 217.2,
            end_time: 217.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a45',
            },
          },
          {
            word: 'exposing',
            start_time: 217.3,
            end_time: 217.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a46',
            },
          },
          {
            word: 'them',
            start_time: 217.8,
            end_time: 218.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a47',
            },
          },
          {
            word: 'to',
            start_time: 218.1,
            end_time: 218.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a48',
            },
          },
          {
            word: 'the',
            start_time: 218.2,
            end_time: 218.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a49',
            },
          },
          {
            word: 'most,',
            start_time: 218.3,
            end_time: 218.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a4a',
            },
          },
          {
            word: 'like,',
            start_time: 220.8,
            end_time: 221.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a4b',
            },
          },
          {
            word: 'helpful',
            start_time: 221.1,
            end_time: 222.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a4c',
            },
          },
          {
            word: 'subjects',
            start_time: 222.4,
            end_time: 223.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a4d',
            },
          },
          {
            word: 'that',
            start_time: 223.5,
            end_time: 224,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a4e',
            },
          },
          {
            word: 'potentially',
            start_time: 224,
            end_time: 224.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a4f',
            },
          },
          {
            word: 'trigger',
            start_time: 224.7,
            end_time: 225.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a50',
            },
          },
          {
            word: 'curiosity.',
            start_time: 225.1,
            end_time: 226.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a51',
            },
          },
          {
            word: 'And',
            start_time: 226.2,
            end_time: 226.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a52',
            },
          },
          {
            word: 'through',
            start_time: 227.2,
            end_time: 227.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a53',
            },
          },
          {
            word: 'that',
            start_time: 227.6,
            end_time: 228.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a54',
            },
          },
          {
            word: 'Journey,',
            start_time: 228.9,
            end_time: 229.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a55',
            },
          },
          {
            word: 'they',
            start_time: 229.3,
            end_time: 229.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a56',
            },
          },
          {
            word: 'find',
            start_time: 229.5,
            end_time: 229.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a57',
            },
          },
          {
            word: 'passions',
            start_time: 229.8,
            end_time: 230.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a58',
            },
          },
          {
            word: 'that',
            start_time: 230.9,
            end_time: 231.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a59',
            },
          },
          {
            word: 'create',
            start_time: 231.9,
            end_time: 232.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a5a',
            },
          },
          {
            word: 'a',
            start_time: 232.2,
            end_time: 232.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a5b',
            },
          },
          {
            word: 'spark',
            start_time: 232.2,
            end_time: 232.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a5c',
            },
          },
          {
            word: 'within',
            start_time: 232.7,
            end_time: 233,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a5d',
            },
          },
          {
            word: 'them,',
            start_time: 233,
            end_time: 233.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a5e',
            },
          },
          {
            word: 'that',
            start_time: 233.3,
            end_time: 233.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a5f',
            },
          },
          {
            word: 'make',
            start_time: 233.4,
            end_time: 233.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a60',
            },
          },
          {
            word: 'them',
            start_time: 233.6,
            end_time: 234,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a61',
            },
          },
          {
            word: 'want',
            start_time: 234,
            end_time: 234.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a62',
            },
          },
          {
            word: 'to',
            start_time: 234.4,
            end_time: 234.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a63',
            },
          },
          {
            word: 'increase',
            start_time: 234.9,
            end_time: 235.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a64',
            },
          },
          {
            word: 'motivation,',
            start_time: 235.2,
            end_time: 235.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a65',
            },
          },
          {
            word: 'for',
            start_time: 235.8,
            end_time: 235.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a66',
            },
          },
          {
            word: 'them,',
            start_time: 235.9,
            end_time: 236,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a67',
            },
          },
          {
            word: 'to',
            start_time: 236,
            end_time: 236.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a68',
            },
          },
          {
            word: 'want',
            start_time: 236.2,
            end_time: 236.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a69',
            },
          },
          {
            word: 'to',
            start_time: 236.7,
            end_time: 237.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a6a',
            },
          },
          {
            word: 'further',
            start_time: 238,
            end_time: 238.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a6b',
            },
          },
          {
            word: 'discover',
            start_time: 238.4,
            end_time: 238.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a6c',
            },
          },
          {
            word: 'themselves',
            start_time: 238.8,
            end_time: 239.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a6d',
            },
          },
          {
            word: 'and',
            start_time: 239.5,
            end_time: 239.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a6e',
            },
          },
          {
            word: 'further,',
            start_time: 239.7,
            end_time: 240.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a6f',
            },
          },
          {
            word: 'learn',
            start_time: 240.4,
            end_time: 240.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a70',
            },
          },
          {
            word: 'about',
            start_time: 240.6,
            end_time: 240.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a71',
            },
          },
          {
            word: 'those',
            start_time: 240.8,
            end_time: 241,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a72',
            },
          },
          {
            word: 'passions',
            start_time: 241,
            end_time: 241.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a73',
            },
          },
          {
            word: 'and',
            start_time: 241.5,
            end_time: 241.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a74',
            },
          },
          {
            word: 'for',
            start_time: 241.7,
            end_time: 241.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a75',
            },
          },
          {
            word: 'the',
            start_time: 241.8,
            end_time: 241.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a76',
            },
          },
          {
            word: 'purse.',
            start_time: 241.9,
            end_time: 242,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a77',
            },
          },
        ],
        _id: {
          $oid: '63b94f39e0bdce18c17f6a32',
        },
      },
      {
        confidence: 0.9128385186195374,
        transcript: " those passions, the think that's where",
        words: [
          {
            word: 'those',
            start_time: 242.2,
            end_time: 242.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a79',
            },
          },
          {
            word: 'passions,',
            start_time: 242.4,
            end_time: 243.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a7a',
            },
          },
          {
            word: 'the',
            start_time: 243.7,
            end_time: 243.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a7b',
            },
          },
          {
            word: 'think',
            start_time: 243.8,
            end_time: 244,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a7c',
            },
          },
          {
            word: "that's",
            start_time: 244,
            end_time: 244.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a7d',
            },
          },
          {
            word: 'where',
            start_time: 244.3,
            end_time: 244.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a7e',
            },
          },
        ],
        _id: {
          $oid: '63b94f39e0bdce18c17f6a78',
        },
      },
      {
        confidence: 0.8631470203399658,
        transcript:
          " Like meaning will come from and where they'll find something that truly makes them happy and makes them content. Even so yeah, my greatest fear is just them not having opportunity. One of my aspirations for my child. Like, I kind of hate parents who were like my son's going to be an astronaut. Although at the same time, I gotta love that. Like, I'd love it. I love the idea of",
        words: [
          {
            word: 'Like',
            start_time: 246.7,
            end_time: 247,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a80',
            },
          },
          {
            word: 'meaning',
            start_time: 247,
            end_time: 247.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a81',
            },
          },
          {
            word: 'will',
            start_time: 247.8,
            end_time: 248,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a82',
            },
          },
          {
            word: 'come',
            start_time: 248,
            end_time: 248.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a83',
            },
          },
          {
            word: 'from',
            start_time: 248.3,
            end_time: 248.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a84',
            },
          },
          {
            word: 'and',
            start_time: 249.1,
            end_time: 249.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a85',
            },
          },
          {
            word: 'where',
            start_time: 249.3,
            end_time: 249.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a86',
            },
          },
          {
            word: "they'll",
            start_time: 249.5,
            end_time: 249.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a87',
            },
          },
          {
            word: 'find',
            start_time: 249.7,
            end_time: 250,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a88',
            },
          },
          {
            word: 'something',
            start_time: 250,
            end_time: 250.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a89',
            },
          },
          {
            word: 'that',
            start_time: 250.5,
            end_time: 251,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a8a',
            },
          },
          {
            word: 'truly',
            start_time: 251.5,
            end_time: 252,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a8b',
            },
          },
          {
            word: 'makes',
            start_time: 252,
            end_time: 252.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a8c',
            },
          },
          {
            word: 'them',
            start_time: 252.2,
            end_time: 252.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a8d',
            },
          },
          {
            word: 'happy',
            start_time: 252.4,
            end_time: 253.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a8e',
            },
          },
          {
            word: 'and',
            start_time: 253.2,
            end_time: 253.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a8f',
            },
          },
          {
            word: 'makes',
            start_time: 253.3,
            end_time: 253.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a90',
            },
          },
          {
            word: 'them',
            start_time: 253.5,
            end_time: 253.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a91',
            },
          },
          {
            word: 'content.',
            start_time: 253.7,
            end_time: 254.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a92',
            },
          },
          {
            word: 'Even',
            start_time: 254.3,
            end_time: 254.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a93',
            },
          },
          {
            word: 'so',
            start_time: 256.5,
            end_time: 256.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a94',
            },
          },
          {
            word: 'yeah,',
            start_time: 256.6,
            end_time: 256.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a95',
            },
          },
          {
            word: 'my',
            start_time: 256.8,
            end_time: 256.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a96',
            },
          },
          {
            word: 'greatest',
            start_time: 256.9,
            end_time: 257.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a97',
            },
          },
          {
            word: 'fear',
            start_time: 257.2,
            end_time: 257.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a98',
            },
          },
          {
            word: 'is',
            start_time: 257.4,
            end_time: 257.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a99',
            },
          },
          {
            word: 'just',
            start_time: 257.6,
            end_time: 257.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a9a',
            },
          },
          {
            word: 'them',
            start_time: 257.8,
            end_time: 258,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a9b',
            },
          },
          {
            word: 'not',
            start_time: 258,
            end_time: 258.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a9c',
            },
          },
          {
            word: 'having',
            start_time: 258.2,
            end_time: 258.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a9d',
            },
          },
          {
            word: 'opportunity.',
            start_time: 258.5,
            end_time: 259.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a9e',
            },
          },
          {
            word: 'One',
            start_time: 260.8,
            end_time: 261,
            _id: {
              $oid: '63b94f39e0bdce18c17f6a9f',
            },
          },
          {
            word: 'of',
            start_time: 261,
            end_time: 261,
            _id: {
              $oid: '63b94f39e0bdce18c17f6aa0',
            },
          },
          {
            word: 'my',
            start_time: 261,
            end_time: 261.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f6aa1',
            },
          },
          {
            word: 'aspirations',
            start_time: 261.1,
            end_time: 261.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f6aa2',
            },
          },
          {
            word: 'for',
            start_time: 261.7,
            end_time: 261.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f6aa3',
            },
          },
          {
            word: 'my',
            start_time: 261.8,
            end_time: 261.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f6aa4',
            },
          },
          {
            word: 'child.',
            start_time: 261.9,
            end_time: 262.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f6aa5',
            },
          },
          {
            word: 'Like,',
            start_time: 262.3,
            end_time: 262.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f6aa6',
            },
          },
          {
            word: 'I',
            start_time: 262.5,
            end_time: 262.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f6aa7',
            },
          },
          {
            word: 'kind',
            start_time: 262.6,
            end_time: 263,
            _id: {
              $oid: '63b94f39e0bdce18c17f6aa8',
            },
          },
          {
            word: 'of',
            start_time: 263,
            end_time: 263.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f6aa9',
            },
          },
          {
            word: 'hate',
            start_time: 263.1,
            end_time: 263.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f6aaa',
            },
          },
          {
            word: 'parents',
            start_time: 263.5,
            end_time: 264,
            _id: {
              $oid: '63b94f39e0bdce18c17f6aab',
            },
          },
          {
            word: 'who',
            start_time: 264,
            end_time: 264.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f6aac',
            },
          },
          {
            word: 'were',
            start_time: 264.1,
            end_time: 264.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f6aad',
            },
          },
          {
            word: 'like',
            start_time: 264.2,
            end_time: 264.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f6aae',
            },
          },
          {
            word: 'my',
            start_time: 264.5,
            end_time: 264.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f6aaf',
            },
          },
          {
            word: "son's",
            start_time: 264.9,
            end_time: 265.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f6ab0',
            },
          },
          {
            word: 'going',
            start_time: 265.2,
            end_time: 265.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f6ab1',
            },
          },
          {
            word: 'to',
            start_time: 265.3,
            end_time: 265.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f6ab2',
            },
          },
          {
            word: 'be',
            start_time: 265.4,
            end_time: 265.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f6ab3',
            },
          },
          {
            word: 'an',
            start_time: 265.5,
            end_time: 265.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f6ab4',
            },
          },
          {
            word: 'astronaut.',
            start_time: 265.5,
            end_time: 266.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f6ab5',
            },
          },
          {
            word: 'Although',
            start_time: 267.7,
            end_time: 268.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f6ab6',
            },
          },
          {
            word: 'at',
            start_time: 268.4,
            end_time: 268.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f6ab7',
            },
          },
          {
            word: 'the',
            start_time: 268.6,
            end_time: 268.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f6ab8',
            },
          },
          {
            word: 'same',
            start_time: 268.6,
            end_time: 268.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f6ab9',
            },
          },
          {
            word: 'time,',
            start_time: 268.9,
            end_time: 269.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f6aba',
            },
          },
          {
            word: 'I',
            start_time: 269.1,
            end_time: 269.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f6abb',
            },
          },
          {
            word: 'gotta',
            start_time: 269.1,
            end_time: 269.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f6abc',
            },
          },
          {
            word: 'love',
            start_time: 269.3,
            end_time: 269.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f6abd',
            },
          },
          {
            word: 'that.',
            start_time: 269.5,
            end_time: 269.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f6abe',
            },
          },
          {
            word: 'Like,',
            start_time: 269.8,
            end_time: 270,
            _id: {
              $oid: '63b94f39e0bdce18c17f6abf',
            },
          },
          {
            word: "I'd",
            start_time: 270,
            end_time: 270.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f6ac0',
            },
          },
          {
            word: 'love',
            start_time: 270.1,
            end_time: 270.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f6ac1',
            },
          },
          {
            word: 'it.',
            start_time: 270.3,
            end_time: 270.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f6ac2',
            },
          },
          {
            word: 'I',
            start_time: 270.5,
            end_time: 270.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f6ac3',
            },
          },
          {
            word: 'love',
            start_time: 270.5,
            end_time: 270.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f6ac4',
            },
          },
          {
            word: 'the',
            start_time: 270.7,
            end_time: 270.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f6ac5',
            },
          },
          {
            word: 'idea',
            start_time: 270.8,
            end_time: 271.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f6ac6',
            },
          },
          {
            word: 'of',
            start_time: 271.3,
            end_time: 271.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f6ac7',
            },
          },
        ],
        _id: {
          $oid: '63b94f39e0bdce18c17f6a7f',
        },
      },
      {
        confidence: 0.7925757169723511,
        transcript:
          ' Wishing for our to be an astronaut out of there to be astronauts but like not because I wanted to be astronauts like fuck that cold and scary and space. But like the skills required to be an astronaut of being independent, being a wild critical thinker having to get along with',
        words: [
          {
            word: 'Wishing',
            start_time: 273.1,
            end_time: 273.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f6ac9',
            },
          },
          {
            word: 'for',
            start_time: 273.4,
            end_time: 273.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f6aca',
            },
          },
          {
            word: 'our',
            start_time: 273.6,
            end_time: 273.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f6acb',
            },
          },
          {
            word: 'to',
            start_time: 273.7,
            end_time: 273.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f6acc',
            },
          },
          {
            word: 'be',
            start_time: 273.9,
            end_time: 274,
            _id: {
              $oid: '63b94f39e0bdce18c17f6acd',
            },
          },
          {
            word: 'an',
            start_time: 274,
            end_time: 274.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f6ace',
            },
          },
          {
            word: 'astronaut',
            start_time: 274.2,
            end_time: 274.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f6acf',
            },
          },
          {
            word: 'out',
            start_time: 274.9,
            end_time: 275.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f6ad0',
            },
          },
          {
            word: 'of',
            start_time: 275.1,
            end_time: 275.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f6ad1',
            },
          },
          {
            word: 'there',
            start_time: 275.3,
            end_time: 275.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f6ad2',
            },
          },
          {
            word: 'to',
            start_time: 275.5,
            end_time: 275.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f6ad3',
            },
          },
          {
            word: 'be',
            start_time: 275.5,
            end_time: 275.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f6ad4',
            },
          },
          {
            word: 'astronauts',
            start_time: 275.6,
            end_time: 276.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f6ad5',
            },
          },
          {
            word: 'but',
            start_time: 276.3,
            end_time: 276.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f6ad6',
            },
          },
          {
            word: 'like',
            start_time: 276.3,
            end_time: 276.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f6ad7',
            },
          },
          {
            word: 'not',
            start_time: 276.5,
            end_time: 276.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f6ad8',
            },
          },
          {
            word: 'because',
            start_time: 276.7,
            end_time: 276.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f6ad9',
            },
          },
          {
            word: 'I',
            start_time: 276.9,
            end_time: 276.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f6ada',
            },
          },
          {
            word: 'wanted',
            start_time: 276.9,
            end_time: 277.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f6adb',
            },
          },
          {
            word: 'to',
            start_time: 277.2,
            end_time: 277.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f6adc',
            },
          },
          {
            word: 'be',
            start_time: 277.3,
            end_time: 277.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f6add',
            },
          },
          {
            word: 'astronauts',
            start_time: 277.4,
            end_time: 278.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f6ade',
            },
          },
          {
            word: 'like',
            start_time: 278.1,
            end_time: 278.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f6adf',
            },
          },
          {
            word: 'fuck',
            start_time: 278.4,
            end_time: 278.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f6ae0',
            },
          },
          {
            word: 'that',
            start_time: 278.6,
            end_time: 279.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f6ae1',
            },
          },
          {
            word: 'cold',
            start_time: 279.1,
            end_time: 279.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f6ae2',
            },
          },
          {
            word: 'and',
            start_time: 279.4,
            end_time: 279.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f6ae3',
            },
          },
          {
            word: 'scary',
            start_time: 279.5,
            end_time: 279.8,
            _id: {
              $oid: '63b94f39e0bdce18c17f6ae4',
            },
          },
          {
            word: 'and',
            start_time: 279.8,
            end_time: 279.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f6ae5',
            },
          },
          {
            word: 'space.',
            start_time: 279.9,
            end_time: 280.5,
            _id: {
              $oid: '63b94f39e0bdce18c17f6ae6',
            },
          },
          {
            word: 'But',
            start_time: 281,
            end_time: 281.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f6ae7',
            },
          },
          {
            word: 'like',
            start_time: 281.1,
            end_time: 281.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f6ae8',
            },
          },
          {
            word: 'the',
            start_time: 281.3,
            end_time: 281.4,
            _id: {
              $oid: '63b94f39e0bdce18c17f6ae9',
            },
          },
          {
            word: 'skills',
            start_time: 281.4,
            end_time: 281.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f6aea',
            },
          },
          {
            word: 'required',
            start_time: 281.7,
            end_time: 282,
            _id: {
              $oid: '63b94f39e0bdce18c17f6aeb',
            },
          },
          {
            word: 'to',
            start_time: 282,
            end_time: 282.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f6aec',
            },
          },
          {
            word: 'be',
            start_time: 282.1,
            end_time: 282.2,
            _id: {
              $oid: '63b94f39e0bdce18c17f6aed',
            },
          },
          {
            word: 'an',
            start_time: 282.2,
            end_time: 282.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f6aee',
            },
          },
          {
            word: 'astronaut',
            start_time: 282.3,
            end_time: 282.9,
            _id: {
              $oid: '63b94f39e0bdce18c17f6aef',
            },
          },
          {
            word: 'of',
            start_time: 282.9,
            end_time: 283.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f6af0',
            },
          },
          {
            word: 'being',
            start_time: 283.7,
            end_time: 284,
            _id: {
              $oid: '63b94f39e0bdce18c17f6af1',
            },
          },
          {
            word: 'independent,',
            start_time: 284,
            end_time: 284.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f6af2',
            },
          },
          {
            word: 'being',
            start_time: 284.7,
            end_time: 285,
            _id: {
              $oid: '63b94f39e0bdce18c17f6af3',
            },
          },
          {
            word: 'a',
            start_time: 285,
            end_time: 285.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f6af4',
            },
          },
          {
            word: 'wild',
            start_time: 285.1,
            end_time: 285.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f6af5',
            },
          },
          {
            word: 'critical',
            start_time: 285.6,
            end_time: 286,
            _id: {
              $oid: '63b94f39e0bdce18c17f6af6',
            },
          },
          {
            word: 'thinker',
            start_time: 286,
            end_time: 286.7,
            _id: {
              $oid: '63b94f39e0bdce18c17f6af7',
            },
          },
          {
            word: 'having',
            start_time: 287.7,
            end_time: 288,
            _id: {
              $oid: '63b94f39e0bdce18c17f6af8',
            },
          },
          {
            word: 'to',
            start_time: 288,
            end_time: 288,
            _id: {
              $oid: '63b94f39e0bdce18c17f6af9',
            },
          },
          {
            word: 'get',
            start_time: 288,
            end_time: 288.1,
            _id: {
              $oid: '63b94f39e0bdce18c17f6afa',
            },
          },
          {
            word: 'along',
            start_time: 288.1,
            end_time: 288.6,
            _id: {
              $oid: '63b94f39e0bdce18c17f6afb',
            },
          },
          {
            word: 'with',
            start_time: 288.6,
            end_time: 289.3,
            _id: {
              $oid: '63b94f39e0bdce18c17f6afc',
            },
          },
        ],
        _id: {
          $oid: '63b94f39e0bdce18c17f6ac8',
        },
      },
    ],
    ...resourceFields,
  },
]

const segements = [
  {
    title: 'Rochester Dads',
    participants: ['Glen'],
    _id: '63c068ee891ce6c29c2eaba2',
    ...resourceFields,
  },
]

const observations = [
  {
    ...resourceFields,
    _id: {
      $oid: '63bb05073692ffa273fda236',
    },
    content:
      "One of my most afraid of being a parent? Is probably that my children will be unhappy. That they'll grow up in this kind of crazy world that we have around us will continue to get crazier and crazier. It means that there's very limited opportunity for them to find who they are and to be who they are and to live the type of life that they want to live, but is probably a stupid fear and that the live whatever life they want to live. Whether I agree with it or not. I just want them to have opportunity at my my greatest fear is that they won't have opportunity.",
    evidence: {
      $oid: '63b94ea2e0bdce18c17f686f',
    },
  },
]

const patterns = [
  {
    ...resourceFields,
    patterns: [
      { name: 'adjectiveNounPair', patterns: ['ADJ NOUN'] },
      { name: 'nounPair', patterns: ['NOUN NOUN'] },
      { name: 'nounTriple', patterns: ['NOUN NOUN NOUN'] },
      {
        name: 'nounPhrase',
        patterns: ['[|ADJ] [NOUN|PROPN]'],
      },
      { name: 'keywords', patterns: ['in-depth investigations'] },
    ],
  },
]

const assumptions = []

async function postCollection(collection, object) {
  await fs.writeFile(
    `./scripts/seed-data/${collection}.json`,
    JSON.stringify(object),
    (err) => {
      if (err) throw err
    }
  )
  exec(
    `mongoimport --uri mongodb://localhost:27017/${name} --file ${__dirname}/seed-data/${collection}.json --jsonArray --drop
    `,
    (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`)
        return
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`)
        return
      }
      console.log(`stdout: ${stdout}`)
    }
  )
}

postCollection('project', projects)
postCollection('evidence', evidence)
postCollection('users', users)
postCollection('observation', observations)
postCollection('assumption', assumptions)
postCollection('segment', segements)
postCollection('pattern', patterns)
