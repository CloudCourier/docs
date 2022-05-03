import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'
import HomepageFeatures from '@site/src/components/HomepageFeatures'
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

function HomepageHeader() {
  if (ExecutionEnvironment.canUseDOM) {
    let script = document.querySelector('#script')
    if (script) {
      return
    }
    script = document.createElement('script')
    script.id = 'script'
    script.innerHTML = `
    (function () {
      let div = document.createElement('div');
      div.id = 'CloudCourierContainer';
      div.style.setProperty('position', 'fixed', 'important');
      div.style.setProperty('right', '20px', 'important');
      div.style.setProperty('bottom', '0', 'important');
      let body = document.querySelector('body');
      body.appendChild(div);
      var s1 = document.createElement('script'),
        s0 = document.getElementsByTagName('script')[0];
      s1.async = true;
      s1.src =
        'https://www.zhangbaolin001.cn/upload/2022/05/CloudCourierInit-bd2daf834a7e44abb619ff1f98c998ae.js';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();`
    document.querySelector('body').appendChild(script)
  }
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className='container'>
        <h1 className='hero__title'>{siteConfig.title}</h1>
        <p className='hero__subtitle'>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className='button button--secondary button--lg'
            to='/docs/intro'
          >
            开始使用
          </Link>
          <Link
            className='button button--secondary button--lg'
            to='/docs/intro'
            style={{marginLeft:'10px'}}
          >
            视频教程
          </Link>
        </div>
      </div>
    </header>
  )
}

export default function Home(): JSX.Element {
  
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`${siteConfig.title}`}
      description='Description will go into a meta tag in <head />'
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
