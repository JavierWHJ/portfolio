import React, { useState, useEffect, useRef } from "react"
import styles from "./Jobs.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import { KEY_CODES } from "../../utils/index"
import SectionTitle from "../shared/SectionTitle"

const Work = () => {
  const [activeTabId, setActiveTabId] = useState(0)
  const [tabFocus, setTabFocus] = useState(null)
  const tabs = useRef([])

  const data = useStaticQuery(graphql`
    query {
      jobs: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/jobs/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              company
              location
              range
              url
            }
            html
          }
        }
      }
    }
  `)

  const jobsData = data.jobs.edges

  const focusTab = () => {
    if (tabs.current[tabFocus]) {
      tabs.current[tabFocus].focus()
      return
    }

    if (tabFocus >= tabs.current.length) {
      setTabFocus(0)
    }

    if (tabFocus < 0) {
      setTabFocus(tabs.current.length - 1)
    }
  }

  useEffect(() => focusTab(), [tabFocus])

  const onKeyDown = e => {
    switch (e.key) {
      case KEY_CODES.ARROW_UP: {
        e.preventDefault()
        setTabFocus(tabFocus - 1)
        break
      }

      case KEY_CODES.ARROW_DOWN: {
        e.preventDefault()
        setTabFocus(tabFocus + 1)
        break
      }

      default: {
        break
      }
    }
  }

  return (
    <section id="work">
      <SectionTitle title="Work Experience" />

      <div className={styles.inner}>
        <div
          className={styles.tablist}
          role="tablist"
          aria-label="Job tabs"
          onKeyDown={e => onKeyDown(e)}
        >
          {jobsData &&
            jobsData.map(({ node }, i) => {
              const { company } = node.frontmatter
              return (
                <button
                  key={i}
                  isactive={activeTabId === i}
                  onClick={() => setActiveTabId(i)}
                  ref={el => (tabs.current[i] = el)}
                  id={`tab-${i}`}
                  role="tab"
                  tabIndex={activeTabId === i ? "0" : "-1"}
                  aria-selected={activeTabId === i ? true : false}
                  aria-controls={`panel-${i}`}
                  className={styles.tab}
                >
                  <span>{company}</span>
                </button>
              )
            })}
          <div
            className={styles.highlight}
            activetabid={activeTabId}
            style={{ transform: `translateY(calc(${activeTabId} * 50px))` }}
          />
        </div>

        <div className={styles.panels}>
          {jobsData &&
            jobsData.map(({ node }, i) => {
              const { frontmatter, html } = node
              const { title, url, company, range } = frontmatter

              return (
                <div
                  id={`panel-${i}`}
                  key={i}
                  role="tabpanel"
                  tabIndex={activeTabId === i ? "0" : "-1"}
                  aria-labelledby={`tab-${i}`}
                  aria-hidden={activeTabId !== i}
                  hidden={activeTabId !== i}
                  className={styles.panel}
                >
                  <h3>
                    <span>{title}</span>
                    <span className={styles.company}>
                      &nbsp;@&nbsp;
                      <a
                        href={url}
                        target="__blank"
                        className={styles.inlineLink}
                      >
                        {company}
                      </a>
                    </span>
                  </h3>

                  <p className={styles.range}>{range}</p>

                  <div dangerouslySetInnerHTML={{ __html: html }} />
                </div>
              )
            })}
        </div>
      </div>
    </section>
  )
}

export default Work
