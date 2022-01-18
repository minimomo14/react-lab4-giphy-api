export interface GiphyResponse {
    data: Data[];
}

export interface Data {
        type: string;
        title: string;
        url: string;
        images: {
            original: {
                url: string;
            };
        };
    };
