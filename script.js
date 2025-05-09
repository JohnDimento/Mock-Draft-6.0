// Draft data
const draftData = {
    round1: [
        {
            pick: 1,
            team: "Winston's Warriors",
            player: "Ashton Jeanty - RB",
            description: "The consensus No. 1 pick. Jeanty’s explosive burst and elite contact balance let him absorb hits at the catch point and drive through defenders."
        },
        {
            pick: 2,
            team: "Winston's Warriors",
            player: "Tetairoa Mcmillan - WR",
            description: "A tall, athletic receiver with excellent ball skills. Mcmillan provides a reliable target and red-zone presence for the Warriors' passing attack."
        },
        {
            pick: 3,
            team: "DoosBoys",
            player: "Omarion Hampton - RB",
            description: "A powerful runner with breakaway speed. Hampton adds a physical presence to the DoosBoys' ground game."
        },
        {
            pick: 4,
            team: "Dropkick Murphys",
            player: "Matthew Golden - WR",
            description: "A polished route runner with reliable hands. Golden brings consistency and playmaking ability to the Murphys' receiving corps."
        },
        {
            pick: 5,
            team: "Lil Peanut's Padres",
            player: "Travis Hunter - WR/CB",
            description: "A rare two-way talent who can impact the game on both sides of the ball. Hunter's versatility makes him a valuable asset for the Padres."
        },
        {
            pick: 6,
            team: "Watauga Whonsters",
            player: "Quinshon Judkins - RB",
            description: "A complete running back with power and elusiveness. Judkins brings a balanced skill set to the Whonsters' offense."
        },
        {
            pick: 7,
            team: "Memphis Jets",
            player: "Cam Ward - QB",
            description: "A talented quarterback with excellent arm strength and mobility. Ward has the potential to be a franchise signal-caller for the Jets."
        },
        {
            pick: 8,
            team: "Dropkick Murphys",
            player: "Treveyon Henderson - RB",
            description: "A dynamic playmaker with home-run hitting ability. Henderson adds another explosive weapon to the Murphys' offense."
        },
        {
            pick: 9,
            team: "Winston's Warriors",
            player: "Colston Loveland - TE",
            description: "A versatile tight end with excellent receiving skills. Loveland provides a reliable target in the middle of the field."
        },
        {
            pick: 10,
            team: "Highland Hawgs",
            player: "Kaleb Johnson - RB",
            description: "A powerful runner with good vision and balance. Johnson brings a physical presence to the Hawgs' ground game."
        },
        {
            pick: 11,
            team: "Winston's Warriors",
            player: "Emeka Egbuka - WR",
            description: "A polished receiver with excellent route running and hands. Egbuka adds another reliable target to the Warriors' passing attack."
        },
        {
            pick: 12,
            team: "Kilpatty Vegas",
            player: "Luther Burden - WR",
            description: "An explosive playmaker with game-breaking ability. Burden brings big-play potential to the Vegas offense."
        }
    ],
    round2: [
        {
            pick: 13,
            team: "Winston's Warriors",
            player: "RJ Harvey - RB",
            description: "A versatile back with good vision and receiving skills. Harvey adds depth and flexibility to the Warriors' backfield."
        },
        {
            pick: 14,
            team: "Rocky Top Rowdies",
            player: "Cam Skattebo - RB",
            description: "A hard-nosed runner with good balance and power. Skattebo brings a physical presence to the Rowdies' ground game."
        },
        {
            pick: 15,
            team: "Highland Hawgs",
            player: "Tyler Warren - TE",
            description: "A big-bodied tight end with reliable hands. Warren provides a solid target in the red zone and middle of the field."
        },
        {
            pick: 16,
            team: "Highland Hawgs",
            player: "Jaxson Dart - QB",
            description: "A talented quarterback with good arm strength and mobility. Dart adds depth and potential to the Hawgs' quarterback room."
        },
        {
            pick: 17,
            team: "Lil Peanut's Padres",
            player: "Tre Harris - WR",
            description: "A smooth route runner with good hands. Harris adds another reliable target to the Padres' receiving corps."
        },
        {
            pick: 18,
            team: "Winston's Warriors",
            player: "Jayden Higgins - WR",
            description: "A tall receiver with good ball skills. Higgins provides another big target for the Warriors' passing attack."
        },
        {
            pick: 19,
            team: "Winston's Warriors",
            player: "Brayshul Tuten - RB",
            description: "A versatile back with good speed and receiving ability. Tuten adds depth and flexibility to the Warriors' backfield."
        },
        {
            pick: 20,
            team: "The Dukes",
            player: "Jack Bech - WR",
            description: "A reliable receiver with good hands and route running. Bech brings consistency to the Dukes' passing game."
        },
        {
            pick: 21,
            team: "Memphis Jets",
            player: "Mason Taylor - TE",
            description: "A promising tight end with good receiving skills. Taylor adds another weapon to the Jets' passing attack."
        },
        {
            pick: 22,
            team: "Expiring Goods",
            player: "Kyle Williams - WR",
            description: "A quick receiver with good route running ability. Williams brings speed and playmaking potential to the Goods' offense."
        },
        {
            pick: 23,
            team: "Lil Peanut's Padres",
            player: "Jaylin Noel - WR",
            description: "A shifty receiver with good hands and route running. Noel adds another reliable target to the Padres' passing game."
        },
        {
            pick: 24,
            team: "Rocky Top Rowdies",
            player: "Pat Bryant - WR",
            description: "A physical receiver with good ball skills. Bryant brings toughness and reliability to the Rowdies' receiving corps."
        }
    ]
};

// DOM Elements
const round1Picks = document.getElementById('round1-picks');
const round2Picks = document.getElementById('round2-picks');
const mobileDescription = document.getElementById('mobile-description');
const closeButton = document.querySelector('.close-button');

// Function to get player image URL from Sleeper
async function getPlayerImage(playerName) {
    try {
        // Remove position from player name for search
        const searchName = playerName.split(' - ')[0];
        console.log('Searching for player:', searchName);
        
        // Sleeper API endpoint for player search
        const response = await fetch(`https://api.sleeper.app/v1/players/nfl`);
        const players = await response.json();
        
        // Find player by name (case insensitive)
        const player = Object.values(players).find(p => 
            p.search_full_name?.toLowerCase() === searchName.toLowerCase() ||
            p.search_first_name?.toLowerCase() + ' ' + p.search_last_name?.toLowerCase() === searchName.toLowerCase()
        );
        
        if (player && player.search_rank) {
            // If player is found and has a rank, return their photo
            return `https://sleepercdn.com/content/nfl/players/thumb/${player.player_id}.jpg`;
        }
        
        // Fallback to UI Avatars if player not found
        return `https://ui-avatars.com/api/?name=${encodeURIComponent(searchName)}&background=random`;
    } catch (error) {
        console.error('Error fetching player image:', error);
        return 'https://via.placeholder.com/60?text=No+Photo';
    }
}

// Create pick elements
async function createPickElement(pick) {
    try {
        const pickElement = document.createElement('div');
        pickElement.className = 'draft-card';
        
        const imageUrl = await getPlayerImage(pick.player);
        const [playerName, position] = pick.player.split(' - ');
        
        pickElement.innerHTML = `
            <div class="card-content">
                <div class="flex items-center space-x-4">
                    <img src="${imageUrl}" alt="${playerName}" class="w-16 h-16 rounded-full border-2 border-espn-red object-cover" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(playerName)}&background=random'">
                    <div class="flex-1">
                        <div class="flex items-center space-x-2">
                            <span class="pick-number">${pick.pick}</span>
                            <span class="team-name">${pick.team}</span>
                        </div>
                        <h3 class="player-name">${playerName}</h3>
                        <p class="player-position">${position}</p>
                    </div>
                </div>
            </div>
            <div class="card-description">
                <div class="text-center max-w-sm">
                    <h4 class="description-text text-lg font-semibold mb-2">${playerName}</h4>
                    <p class="description-subtext">${pick.description}</p>
                </div>
            </div>
        `;

        // Mobile click functionality
        pickElement.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                const title = document.getElementById('pick-title');
                const description = document.getElementById('pick-description');
                
                // Clear any existing image
                const existingImage = description.parentElement.querySelector('img');
                if (existingImage) {
                    existingImage.remove();
                }
                
                const modalImage = document.createElement('img');
                modalImage.src = imageUrl;
                modalImage.alt = playerName;
                modalImage.className = 'w-24 h-24 rounded-full border-2 border-espn-red mx-auto mb-4 object-cover';
                modalImage.onerror = function() {
                    this.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(playerName)}&background=random`;
                };
                
                title.textContent = playerName;
                description.textContent = pick.description;
                description.parentElement.insertBefore(modalImage, title);
                mobileDescription.classList.remove('hidden');
            }
        });

        return pickElement;
    } catch (error) {
        console.error('Error creating pick element:', error);
        const errorElement = document.createElement('div');
        errorElement.className = 'draft-card';
        errorElement.innerHTML = `
            <div class="card-content">
                <div class="flex items-center space-x-4">
                    <div class="flex-1">
                        <div class="flex items-center space-x-2">
                            <span class="pick-number">${pick.pick}</span>
                            <span class="team-name">${pick.team}</span>
                        </div>
                        <h3 class="player-name">${pick.player}</h3>
                    </div>
                </div>
            </div>
        `;
        return errorElement;
    }
}

// Initialize draft picks
async function initializeDraft() {
    try {
        console.log('Initializing draft...');
        
        // Clear existing picks
        round1Picks.innerHTML = '';
        round2Picks.innerHTML = '';
        
        console.log('Loading Round 1 picks...');
        for (const pick of draftData.round1) {
            const pickElement = await createPickElement(pick);
            round1Picks.appendChild(pickElement);
        }
        
        console.log('Loading Round 2 picks...');
        for (const pick of draftData.round2) {
            const pickElement = await createPickElement(pick);
            round2Picks.appendChild(pickElement);
        }
        
        console.log('Draft initialization complete!');
    } catch (error) {
        console.error('Error initializing draft:', error);
    }
}

// Close mobile description
document.querySelector('#mobile-description button').addEventListener('click', () => {
    mobileDescription.classList.add('hidden');
});

// Close mobile description when clicking outside
mobileDescription.addEventListener('click', (e) => {
    if (e.target === mobileDescription) {
        mobileDescription.classList.add('hidden');
    }
});

// Initialize the draft when the page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing draft...');
    initializeDraft();
}); 