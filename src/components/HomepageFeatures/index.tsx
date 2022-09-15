import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: '面向开源',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
       <b>云信客服</b>  是一个开源软件，任何人都能给 <b>云信客服</b>
        提交自己想要的能力。我们始终相信开源的力量能让一个应用变得更好
      </>
    ),
  },
  {
    title: '信息集中化管理',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
       当你拥有多个网站需要同时管理，可以创建多个组织，分别挂在每个网站上，实现一个账号分别管理多个网站的访客信息。
      </>
    ),
  },
  {
    title: '多线程',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        使用<code>SharedWorker</code>管理通信，当你网站和访客很多时，往往需要开多个窗口，使用<code>SharedWorker</code>统一管理通信，极大减轻了服务器压力。
      </>
    ),
  },
]

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <Svg className={styles.featureSvg} role='img' />
      </div>
      <div className='text--center padding-horiz--md'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
