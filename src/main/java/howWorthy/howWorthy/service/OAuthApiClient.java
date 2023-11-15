package howWorthy.howWorthy.service;

import howWorthy.howWorthy.domain.OAuthInfoResponse;
import howWorthy.howWorthy.domain.OAuthLoginParams;
import howWorthy.howWorthy.domain.OAuthProvider;

public interface OAuthApiClient {
    OAuthProvider oAuthProvider();
    String requestAccessToken(OAuthLoginParams params);
    OAuthInfoResponse requestOauthInfo(String accessToken);
}