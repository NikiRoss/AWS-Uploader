package com.rubycode.awsreactupload.datastore;

import com.rubycode.awsreactupload.profile.UserProfile;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Repository
public class UserProfileDataStore {

    private static final List<UserProfile> USER_PROFILES = new ArrayList<>();

    static {
        USER_PROFILES.add(new UserProfile(UUID.fromString("1b197173-8345-466c-9afb-8059b49fc908"), "Michael Jackson", null));
        USER_PROFILES.add(new UserProfile(UUID.fromString("764e861d-00bc-4128-8d5b-b9478da901d0"), "Mike Tyson", null));
        USER_PROFILES.add(new UserProfile(UUID.fromString("8f44c45e-b705-469c-9c34-f8148bbe9d5b"), "Michael Jordan", null));
    }

    public List<UserProfile> getUserProfiles() {
        return USER_PROFILES;
    }
}
