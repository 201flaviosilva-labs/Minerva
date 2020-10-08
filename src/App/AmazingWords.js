const prompt = require('prompt-sync')();

export function AmazingWords() {
	console.log("Write something:");
	const resp = prompt("→ ").toLowerCase();
	console.log("-------------------------");
	for (let i = 0; i < resp.length; i++) {
		print(resp[i]);
	}
}

function print(i) {
	switch (i) {
		case 'a':
			console.log("..######..\n..#....#..\n..######..\n..#....#..\n..#....#..\n\n");
			break;
		case 'b':
			console.log("..######..\n..#....#..\n..#####...\n..#....#..\n..######..\n\n");
			break;
		case 'c':
			console.log("..######..\n..#.......\n..#.......\n..#.......\n..######..\n\n");
			break;
		case 'd':
			console.log("..#####...\n..#....#..\n..#....#..\n..#....#..\n..#####...\n\n");
			break;
		case 'e':
			console.log("..######..\n..#.......\n..#####...\n..#.......\n..######..\n\n");
			break;
		case 'f':
			console.log("..######..\n..#.......\n..#####...\n..#.......\n..#.......\n\n");
			break;
		case 'g':
			console.log("..######..\n..#.......\n..#####...\n..#....#..\n..#####...\n\n");
			break;
		case 'h':
			console.log("..#....#..\n..#....#..\n..######..\n..#....#..\n..#....#..\n\n");
			break;
		case 'i':
			console.log("..######..\n....##....\n....##....\n....##....\n..######..\n\n");
			break;
		case 'j':
			console.log("..######..\n....##....\n....##....\n..#.##....\n..####....\n\n");
			break;
		case 'k':
			console.log("..#....#..\n..#..#....\n..##......\n..#..#....\n..#....#..\n\n");
			break;
		case 'l':
			console.log("..#.......\n..#.......\n..#.......\n..#.......\n..######..\n\n");
			break;
		case 'm':
			console.log("..#....#..\n..##..##..\n..#.##.#..\n..#....#..\n..#....#..\n\n");
			break;
		case 'n':
			console.log("..#....#..\n..##...#..\n..#.#..#..\n..#..#.#..\n..#...##..\n\n");
			break;
		case 'o':
			console.log("..######..\n..#....#..\n..#....#..\n..#....#..\n..######..\n\n");
			break;
		case 'p':
			console.log("..######..\n..#....#..\n..######..\n..#.......\n..#.......\n\n");
			break;
		case 'q':
			console.log("..######..\n..#....#..\n..#.#..#..\n..#..#.#..\n..######..\n\n");
			break;
		case 'r':
			console.log("..######..\n..#....#..\n..#.##...\n..#...#...\n..#....#..\n\n");
			break;
		case 's':
			console.log("..######..\n..#.......\n..######..\n.......#..\n..######..\n\n");
			break;
		case 't':
			console.log("..######..\n....##....\n....##....\n....##....\n....##....\n\n");
			break;
		case 'u':
			console.log("..#....#..\n..#....#..\n..#....#..\n..#....#..\n..######..\n\n");
			break;
		case 'v':
			console.log("..#....#..\n..#....#..\n..#....#..\n...#..#...\n....##....\n\n");
			break;
		case 'w':
			console.log("..#....#..\n..#....#..\n..#.##.#..\n..##..##..\n..#....#..\n\n");
			break;
		case 'x':
			console.log("..#....#..\n...#..#...\n....##....\n...#..#...\n..#....#..\n\n");
			break;
		case 'y':
			console.log("..#....#..\n...#..#...\n....##....\n....##....\n....##....\n\n");
			break;
		case 'z':
			console.log("..######..\n......#...\n.....#....\n....#.....\n..######..\n\n");
			break;
		case '.':
			console.log("----..----\n\n");
			break;
		default:
			break;
	}
}