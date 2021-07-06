import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useState, useEffect } from 'react'
import { getImages } from '@helper/api'

import {
    TextField,
    AppBar,
    Typography,
    Tabs,
    Tab,
    Chip,
} from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination'

import CardImage from '@components/CardImage/index'

export default function Home({ data }) {
    const [searchValue, setSearchValue] = useState('')
    const [tab, setTab] = useState(0)
    const [page, setPage] = useState(0)

    const searchFilter = (searchValue, list) => {
        let lowerCaseQuery = searchValue.toLowerCase()
        let filteredList = searchValue
            ? list.filter((x) => x.tags.toLowerCase().includes(lowerCaseQuery))
            : list
        return filteredList
    }

    const handleChangeTab = (event, newValue) => {
        setTab(newValue)
    }

    const handleChangePage = (event, page) => {
        setPage(page)
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Flicker Explorer</title>
                <meta name="description" content="Flickr Explorer App" />
                <link
                    rel="icon"
                    href="https://combo.staticflickr.com/pw/favicon.ico"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
            </Head>
            <AppBar position="static" className={styles.appbar}>
                <Tabs value={tab} onChange={handleChangeTab}>
                    <Tab label="Search" />
                    <Tab label="Pagination" />
                </Tabs>
            </AppBar>
            <main className={styles.main}>
                {tab === 0 && (
                    <div hidden={tab !== 0} className={styles.tab}>
                        <div className={styles.searchBar}>
                            <TextField
                                id="outlined-basic"
                                label="Search image by tags"
                                variant="outlined"
                                fullWidth
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                            />
                            {!data && (
                                <Typography
                                    key="1"
                                    align="center"
                                    variant="h6"
                                    gutterTop
                                >
                                    No Result
                                </Typography>
                            )}
                            {data &&
                                searchFilter(searchValue, data).map(
                                    (item, index) => {
                                        return (
                                            <>
                                                <CardImage
                                                    key={index}
                                                    data={item}
                                                />
                                            </>
                                        )
                                    }
                                )}
                        </div>
                    </div>
                )}
                {tab === 1 && (
                    <div hidden={tab !== 1} className={styles.tab}>
                        <div className={styles.searchcontainer}>
                            <div>
                                {/* <Image
                                src={data[page].media.m}
                                width={200}
                                height={200}
                                alt={data[page].description}
                            /> */}
                                <CardImage key={page} data={data[page]} />
                            </div>
                            <div className={styles.pagination}>
                                <Pagination
                                    count={data.length}
                                    onChange={handleChangePage}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    )
}
export async function getStaticProps(context) {
    const res = await getImages()
    const data = await res
    console.log(data.items)

    if (!res.status == 200) {
        return {
            notFound: true,
        }
    }

    return {
        props: { data: data.items }, // will be passed to the page component as props
    }
}
