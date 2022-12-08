# how to run

## server side
    1. clone the repo
    2. npm install
    3. npm run dev
    4. hit "http://localhost:3000/upload" api with post request

## client side

    1. make sure the data coming from client end should send formData(mutipart/form-data)
    2. also make sure the name of the formData should be "file"
    3. sample code for client-side:
        <script>
            let files;
            const handleSubmit = async (event) => {
                event.preventDefault();
                const formData = new FormData();
                formData.append("file", files[0]);
                console.log(formData);
                try {
                    const res = await fetch("http://localhost:3000/upload", {
                        method: "POST",
                        body: formData,
                    });
                    const data = await res.json();
                    console.log(data);
                } catch (error) {
                    console.log(error);
                }
            };
        </script>

        <form action="" on:submit={handleSubmit} enctype="multipart/form-data">
            <input type="file" name="file" id="" bind:files />
            <button type="submit">submit</button>
        </form>