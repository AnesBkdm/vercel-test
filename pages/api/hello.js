export default function handler(req, res) {
    res.status(200).json({ text: 'Hello' });
}

// DO NOT FETCH AN API ROUTE FROM GETSTATICPROPS OR GETSTATICPATHS
// BECAUSE API IS NOT STATIC duh

// Instead, write your server-side code directly in getStaticProps 
// or getStaticPaths (or call a helper function).