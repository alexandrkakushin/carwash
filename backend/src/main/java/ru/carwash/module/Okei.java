package ru.carwash.module;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import ru.carwash.db.repository.UnitsRepository;
import ru.carwash.entity.Unit;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

import static java.net.HttpURLConnection.HTTP_OK;

/**
 * @author a.kakushin
 */
@Service
public class Okei {

    @Value("${okei.json.url}")
    private String url;

    @Autowired
    UnitsRepository unitsRepository;

    public boolean fill() {
        JSONArray data = getData();
        JSONObject row;

        List<Unit> units = new ArrayList<>();

        for (int i = 0; i < data.length(); i++) {
            row = data.getJSONObject(i);
            if (row.has("CODE")) {
                if (!unitsRepository.findByCode(row.getString("CODE")).isPresent()) {
                    units.add(new Unit(
                            row.getString("CODE"),
                            row.getString("NATIONAL")));
                }
            }
        }
        unitsRepository.saveAll(units);

        return true;
    }

    private JSONArray getData() {
        JSONArray data = null;
        try {
            URL urlJson = new URL(url);
            HttpURLConnection connection = (HttpURLConnection) urlJson.openConnection();
            connection.setRequestMethod("GET");
            if (connection.getResponseCode() == HTTP_OK) {
                BufferedReader br = new BufferedReader(new InputStreamReader(connection.getInputStream(), StandardCharsets.UTF_8));
                StringBuilder sb = new StringBuilder();
                String out;
                while ((out = br.readLine()) != null) {
                    sb.append(out);
                }
                connection.disconnect();
                data = new JSONArray(sb.toString());
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return data;
    }
}
