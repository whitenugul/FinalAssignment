export const stock = () => ({
    field: {
        search: [
            "reporter_ko",
            "content_kskc",
            "category_k",
            "title_ko"
        ],
        highlight: [
            "reporter_ko",
            "content_kskc",
            "category_k",
            "title_ko"
        ],
        result: [
            "reporter_ko",
            "content_kskc",
            "category_k",
            "title_ko"
        ]
    }
})
export const tb_ked = () => ({
    field: {
        search: [
            "company_k",
            "company_eng",
            "road_ADD_ksk"
        ],
        highlight: [
            "company_k",
            "company_eng",
            "road_ADD_ksk"
        ],
        result: [
            "company_k",
            "company_eng",
            "road_ADD_ksk"
        ]
    }
})

export const thesis = () => ({
    field: {
        search: [
            "category_k",
            "title_ksk",
            "author_ko",
            "author_eng",
            "publisher_ko",
            "ministry_ko",
            "location_ko",
            "subject_k",
            "abstract_ko"
        ],
        highlight: [
            "category_k",
            "title_ksk",
            "author_ko",
            "author_eng",
            "publisher_ko",
            "ministry_ko",
            "location_ko",
            "subject_k",
            "abstract_ko"
        ],
        result: [
            "title_ksk"
        ]
    }
})