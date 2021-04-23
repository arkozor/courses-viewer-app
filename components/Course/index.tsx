import CourseTitle from 'components/Course/CourseTitle'
import VideoPlayer from 'components/Course/CourseVideo'
import React from 'react'
import CommentSection from './CommentSection'
import CourseDescription from './CourseDescription'
import classes from './style.module.scss'

const commentList = [
    {
        author: 'James',
        body: 'FIRST',
        answers: [
            {
                author: 'Johanna',
                body: 'On peut éviter ce genre de commentaires sur les cours ?'
            }
        ]
    },
    {
        author: 'Mark',
        body: 'Merci'
    },
    {
        author: 'Phil',
        body: 'Génial !'
    },
    {
        author: 'Roger',
        body: 'Toujours au top !'
    },
    {
        author: 'Benoit',
        body: 'Super cours, merci!'
    },
    {
        author: 'John',
        body: "Super cours, j'adore !"
    },
    {
        author: 'Jackie',
        body: 'Comment ça se fait que le cours ne soit pas disponible ?',
        answers: [
            {
                author: 'Johanna',
                body: 'Les serveurs de vidéos sont down pour le moment ...'
            },
            {
                author: 'Mathieu',
                body: 'La lose :/'
            },
            {
                author: 'Benoit',
                body: "C'est dispo !"
            },
            {
                author: 'Johanna',
                body: 'Super !'
            }
        ]
    }
]

const course = {
    title: 'Les bases du C#',
    author: {
        nickname: 'Mario',
        avatarSrc:
            'http://mgt.stelabouras.com/super-mario-run/super-mario-run@128.jpg'
    },
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat id mauris vel fermentum. Aliquam et posuere est, et faucibus ante. Suspendisse potenti. Vestibulum fringilla nisl sit amet tellus faucibus mattis. Donec imperdiet risus ac mi tincidunt ullamcorper. Pellentesque condimentum dui in fringilla accumsan. Nulla sit amet magna vestibulum, ultrices odio a, tempor erat. Curabitur vestibulum ex mi, in elementum dolor egestas sit amet. Praesent imperdiet orci a urna placerat fermentum. Suspendisse vitae arcu eget ipsum cursus tristique. Sed quis sodales nibh. Fusce dapibus semper mauris, ullamcorper bibendum velit pulvinar ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat id mauris vel fermentum. Aliquam et posuere est, et faucibus ante. Suspendisse potenti. Vestibulum fringilla nisl sit amet tellus faucibus mattis. Donec imperdiet risus ac mi tincidunt ullamcorper. Pellentesque condimentum dui in fringilla accumsan. Nulla sit amet magna vestibulum, ultrices odio a, tempor erat. Curabitur vestibulum ex mi, in elementum dolor egestas sit amet. Praesent imperdiet orci a urna placerat fermentum. Suspendisse vitae arcu eget ipsum cursus tristique. Sed quis sodales nibh. Fusce dapibus semper mauris, ullamcorper bibendum velit pulvinar ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat id mauris vel fermentum. Aliquam et posuere est, et faucibus ante. Suspendisse potenti. Vestibulum fringilla nisl sit amet tellus faucibus mattis. Donec imperdiet risus ac mi tincidunt ullamcorper. Pellentesque condimentum dui in fringilla accumsan. Nulla sit amet magna vestibulum, ultrices odio a, tempor erat. Curabitur vestibulum ex mi, in elementum dolor egestas sit amet. Praesent imperdiet orci a urna placerat fermentum. Suspendisse vitae arcu eget ipsum cursus tristique. Sed quis sodales nibh. Fusce dapibus semper mauris, ullamcorper bibendum velit pulvinar ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat id mauris vel fermentum. Aliquam et posuere est, et faucibus ante. Suspendisse potenti. Vestibulum fringilla nisl sit amet tellus faucibus mattis. Donec imperdiet risus ac mi tincidunt ullamcorper. Pellentesque condimentum dui in fringilla accumsan. Nulla sit amet magna vestibulum, ultrices odio a, tempor erat. Curabitur vestibulum ex mi, in elementum dolor egestas sit amet. Praesent imperdiet orci a urna placerat fermentum. Suspendisse vitae arcu eget ipsum cursus tristique. Sed quis sodales nibh. Fusce dapibus semper mauris, ullamcorper bibendum velit pulvinar ut.'
}

const Course = (): JSX.Element => {
    return (
        <div className={classes.container}>
            <div className={classes.videoAndCommentsContainer}>
                <CourseTitle title="CSharp - les bases" />
                <VideoPlayer poster={'/images/JDG.png'} />
                <CourseDescription course={course} />
                <CommentSection comments={commentList} />
            </div>
            <div className={classes.chapterContainer}>Chapters</div>
        </div>
    )
}

export default Course
